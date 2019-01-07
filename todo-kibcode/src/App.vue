<template>
  <v-app>

    <Navbar/>

    <v-content class="grey lighten-3">
      <v-container fluid>

          <router-view></router-view>

      </v-container>
    </v-content>

  </v-app>
</template>

<script>

  import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
