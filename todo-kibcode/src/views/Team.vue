<template>
	<div class="team">
		
		<h1 class="subheading grey--text">Team view</h1>

		<v-container class="my-5">
			<v-layout row wrap>

				<v-flex xs12 sm4 md3 lg2 v-for="person in team" :key="person.name" class="">
					<v-card flat class="text-xs-center ma-2">
						<v-responsive class="pt-4">
							<v-avatar
								size=""
								color=""
								class="grey lighten-2"
							>
								<img :src="person.avatar" :alt="`image of ${person.name}`">
							</v-avatar>
						</v-responsive>

						<v-card-text>
							<div class="subheading"> {{ person.name }} </div>
							<div class="grey--text"> {{ person.role }} </div>
						</v-card-text>

						<v-card-actions>
							<v-btn flat color="grey">
								<v-icon small left>message</v-icon>
								<span>Message</span>
							</v-btn>							  
						</v-card-actions>
					</v-card>
				</v-flex>

			</v-layout>
		</v-container>

	</div>
</template>

<script>
	
export default {
	data() {
		return {
			team: [
				{ name: 'KibCode', role: 'Web Developer', avatar: '/avatar-1.png' },
				{ name: 'Breeze', role: 'Human Manager', avatar: '/avatar-2.png' },
				{ name: 'Husna', role: 'UI Cordinator', avatar: '/avatar-3.png' },
				{ name: 'Carol', role: 'Business Cordinator', avatar: '/avatar-4.png' },
				{ name: 'Njogu', role: 'Backend Expert', avatar: '/avatar-5.png' },
				{ name: 'Lindsay', role: 'Marketing Guru', avatar: '/avatar-3.png' },
			]
		}
	}
}

</script>