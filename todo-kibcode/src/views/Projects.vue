<template>
	<div class="projects">

		<h1 class="subheading grey--text">Projects view</h1>

		<v-container class="my-5">
			
			<v-expansion-panel>
				<v-expansion-panel-content v-for="project in myProjects" :key="project.title">
					<div slot="header"> {{ project.title }} </div>
					<v-card>
						<v-card-text class="px-4 grey--text">
							<div class="font-weight-bold"> Due by {{ project.due }} </div>
							<div> {{ project.content }} </div>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>  
			</v-expansion-panel>

		</v-container>

	</div>
</template>

<script>

import db from '@/fb'

export default{
	data(){
		return {
			projects: [
				{ title: 'In static ARRAY', person: 'KibCode', due: '4th Jan 2019', status: 'complete', content: 'Non exercitation adipisicing ullamco incididunt tempor laborum magna nulla.' },
				{ title: 'static ARRAY 2', person: 'De-Bugger KE', due: '25th Jan 2019', status: 'overdue', content: 'Ullamco incididunt tempor laborum Non exercitation adipisicing ullamco incididunt tempor laborum magna nulla.' }
			]
		}
	},// END-data()
	computed: {
		myProjects(){
			return this.projects.filter( project => {
				return project.person === 'KibCode'
			} )
		}
	},// END-computed
	created(){
		db.collection( 'projects' ).onSnapshot( res => {
			const changes = res.docChanges();

			changes.forEach( change => {
				if (change.type === 'added'){
					this.projects.push( {
						...change.doc.data(),
						id: change.doc.id
					} );
				}
			} );
		} );
	}// END-created()

}// END-export

</script>
