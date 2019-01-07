<template>
	
	<v-dialog max-width="600px" v-model="popupFlag">
		<v-btn class="success" slot="activator" flat>Add New Project</v-btn>
		<v-card>
			<v-card-title primary-title> Add New Project </v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="formAddProject">
					<v-text-field
						name="title"
						label="Title"
						id="proj-title"
						v-model="title" prepend-icon="folder"
						:rules="inputRules"
					></v-text-field>
					<v-tooltip top>
						<v-text-field
							name="person"
							label="Person"
							id="proj-person"
							v-model="person" prepend-icon="person"
							:rules="inputRules"
							slot="activator"
						></v-text-field>
						<span>To be done by who?</span>
					</v-tooltip>
					<v-textarea label="Information" v-model="content"
						name="content" id="proj-content" 
						prepend-icon="edit" :rules="inputRules"></v-textarea>

					<v-menu>
						<v-text-field
							name="due"
							label="Due date"
							id="proj-due"
							slot="activator" prepend-icon="date_range"
							:value="formattedDate" :rules="inputRules"
						></v-text-field>

						<v-date-picker v-model="due"></v-date-picker>

					</v-menu>

					<v-spacer></v-spacer>

					<v-btn :loading="loadFlag" class="success mt-4" @click="addProject"> Add Project </v-btn>
				</v-form>
				<span color="success"> {{ message }} </span>
			</v-card-text>
		</v-card>
	</v-dialog>

</template>

<script>

import format from 'date-fns/format'
import db from '@/fb'

export default {

	data(){
		return {
			title: '',
			content: '',
			person: '',
			projects: [],
			due: null,
			inputRules: [
				v => v.length >= 3 || 'Minimum length is 3 characters'
			],
			message: '',
			loadFlag: false,
			popupFlag: false
		}
	},
	methods: {
		addProject(){
			if( this.$refs.formAddProject.validate() ){
				/*console.log( this.title, this.content );
				this.projects.push( { title: this.title, content: this.content } );
				console.log( this.projects );
				this.title = '';
				this.content = '';*/
				this.loadFlag = true;
				const project = {
					title: this.title,
					content: this.content,
					due: format( this.due, 'Do MMM YYYY' ),
					person: this.person,
					status: 'ongoing'
				}

				db.collection( 'projects' ).add( project ).then( () => {
					this.loadFlag = false;
					//this.message = 'Successfully added to the db';
						// clearing form-inputs
					/*this.title = ''; this.content = ''; this.due = '';
					this.person = '';*/
					this.$refs.formAddProject.reset();
					this.popupFlag = false;
					this.$emit( 'projectAdded' );	
					/*setTimeout(() => {
						//this.message = '';
					}, 500);*/
				} );
			} else {
				this.message = 'Invalid data'
			}
		}
	},
	computed: {
		formattedDate(){
			return this.due ? format( this.due, 'Do MMM YYYY' ) : ''
		}
	}

}
</script>