<template>
	<div class="dashboard">
		
		<h1 class="subheading grey--text">
			Welcome to [ todo-kibcode ]
			<small>homepage</small>
		</h1>

		<v-container class="my-5">

			<v-layout row wrap class="mb-3">

				<v-tooltip top>
					<v-btn color="grey" flat @click="sortBy('title')" slot="activator">
						<v-icon left>folder</v-icon>
						<span class="caption text-lowercase">
							By project name
						</span>
					</v-btn>
					<span>Sort projects by project Title</span>
				</v-tooltip>

				<v-tooltip top>
					<v-btn color="grey" flat @click="sortBy('person')" slot="activator">
						<v-icon left>person</v-icon>
						<span class="caption text-lowercase">
							By person
						</span>
					</v-btn>
					<span>Sort projects by Person</span>
				</v-tooltip>

				<v-tooltip top>
					<v-btn color="grey" flat @click="sortBy('status')" slot="activator">
						<v-icon left>schedule</v-icon>
						<span class="caption text-lowercase">
							By Status
						</span>
					</v-btn>
					<span>Sort projects by Status</span>
				</v-tooltip>

			</v-layout>

			<v-card flat class="mb-2" v-for="project in projects" :key="project.title">

				<v-layout row wrap :class="`pa-3 project ${project.status}`" justify-space-around>
					
					<v-flex xs12 md6>
						<div class="caption grey--text">Project Title</div>
						<div class="">{{ project.title }}</div>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<div class="caption grey--text">Person</div>
						<div>{{ project.person }}</div>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<div class="caption grey--text">Due by</div>
						<div>{{ project.due }}</div>
					</v-flex>

					<v-flex xs2 sm4 md2>
						<div class="right">
							<v-chip small :class="`${project.status} my-2 caption white--text`">
								{{ project.status }}
							</v-chip>
						</div>
					</v-flex>

					<v-divider></v-divider>

				</v-layout>

			</v-card>

		</v-container>

	</div>	
</template>

<script>

import db from '@/fb'

export default {
	data() {
		return {
			projects: [
				{ title: 'In static ARRAY', person: 'KibCode', due: '4th Jan 2019', status: 'complete', content: 'Non exercitation adipisicing ullamco incididunt tempor laborum magna nulla.' },
				{ title: 'static ARRAY 2', person: 'De-Bugger KE', due: '25th Jan 2019', status: 'overdue', content: 'Ullamco incididunt tempor laborum Non exercitation adipisicing ullamco incididunt tempor laborum magna nulla.' }
			]
		}
	},// END-data()
	methods: {
		sortBy( property ) {
			this.projects.sort( (a,b) => a[property] < b[property] ? -1 : 1 )
		}
	},// END-methods
	created() {
		
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

<style scoped>
	
	.project.complete {
		border-left: 4px solid green;
	}

	.project.ongoing {
		border-left: 4px solid orange;
	}

	.project.overdue {
		border-left: 4px solid tomato;
	}
	.v-chip.complete {
		background-color: green;
	}

	.v-chip.ongoing {
		background-color: orange;
	}

	.v-chip.overdue {
		background-color: tomato;
	}

</style>