<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Kib</span>
        <span class="font-weight-light">Graphql-2</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout column align-center>

          <v-flex xs12 m6 color="grey">
            <h1>Karibu to KibGraphQL-2</h1>
          </v-flex>

          <v-flex xs12 m6 color="grey">
            <div>
              <span left> <v-btn color="success" small fab @click="getAllAuthors">
                <v-icon>explore</v-icon>
              </v-btn> </span>
              <div> {{ allauthors }} </div>
            </div>
          </v-flex>

          <v-divider></v-divider>

          <v-flex xs12 m6 color="grey">
            <p class="subheading">
              {{ status }}
            </p>
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
    //c
  },
  data () {
    return {
      allauthors: [],
      status: '',
    }
  },// END-data()
  methods: {
    async getAllAuthors(){
      try {
        const res = await axios.post( 'http://localhost:4002/rootEnd', {
          query: '{ authors { id jina nationality} }'
        } );
        this.allauthors = res.data.data.authors;
      } catch (e) {
        this.status = e;
        console.log( 'Err: ', e );
      }// END-try_catch
    },// end-getAllAuthors
  },// END-methods
}
</script>
