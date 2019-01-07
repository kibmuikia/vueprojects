<template>

<nav>
	<v-snackbar
		v-model="snackbarFlag"
		top color="success"
		:timeout="4000"
	>
		<span> Great! You have just added a new project </span>
		<!--<v-btn flat color="white" @click="snackbarFlag = false"> <v-icon>close</v-icon> </v-btn>-->
	</v-snackbar>

	<v-toolbar app>

		<v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
		
		<v-toolbar-title class="text-uppercase grey--text">
			<span class="font-weight-light">ToDo</span>
			<span>KibCode</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<!-- dropdown menu -->
		<v-menu class="hidden-xs-only" offset-y>
			<v-btn color="grey" flat slot="activator">
				<v-icon left>expand_more</v-icon>
				<span>Menu</span>
			</v-btn>
			<v-list>
				<v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
					<v-list-tile-title>{{ link.text }}</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-menu>
		<!-- End: dropdown menu -->

		<v-btn flat color="grey">
			<span>
				Account
			</span>
			<v-icon right class="hidden-sm-and-down">account_box</v-icon>
		</v-btn>

	</v-toolbar>

	<v-navigation-drawer app class="primary" v-model="drawer">

		<v-layout column align-center class="text-xs-center">
			<v-flex class="mt-5">
				<v-avatar
					size=""
					color=""
					class="grey"
				>
					<img src="/avatar-2.png" alt="profile photo">
				</v-avatar>
				<p class="mt-1 subheading white--text">
					KibCode
				</p>
			</v-flex>
			<v-flex class="mt-4 mb-3">
				<Popup @projectAdded="snackbarFlag = true" />
			</v-flex> 
		</v-layout>

		<v-list>

			<v-list-tile v-for="link in links" :key="link.text" router :to="link.route">

				<v-list-tile-action>
					<v-icon class="white--text">
						{{ link.icon }}
					</v-icon>
				</v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title class="white--text">
						
							{{ link.text }}
						
					</v-list-tile-title>
				</v-list-tile-content>

			</v-list-tile>
		</v-list>
	</v-navigation-drawer>

</nav>

	

</template>

<script>

import Popup from './Popup'
	
export default{
	components: { Popup },
	data() {
		return {
			drawer: false,
			links: [
				{ icon: "dashboard", text: "Dashboard", route: "/" },
				{ icon: "folder", text: "My Projects", route: "/projects" },
				{ icon: "person", text: "Team", route: "/team" },
			],
			snackbarFlag: false
		}
	}
}

</script>