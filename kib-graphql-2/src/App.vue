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
        <v-layout column align-center wrap>

          <v-flex xs12 md6>
            <h1>Karibu to KibGraphQL-2</h1>
          </v-flex>

          <v-flex xs12 md6 mt-2>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline grey--text">All Authors</div>
                  <span v-if="allauthors.length > 0"> {{ allauthors }} </span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="green" @click="getAllAuthors">Get the list</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 mt-2>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline grey--text">Details of an Author</div>
                  <span v-if="author.length > 0"> {{ author }} </span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="green" @click="getAuthor">View Details</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 v-if="status" mt-5>
            <v-card>
              <v-card-title primary-title>
                Status message
              </v-card-title>
              <v-card-text>
                <p class="subheading"> {{ status }} </p>
              </v-card-text>
            </v-card>
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
      allauthors: {},
      author: {},
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
        //console.log( 'Err: ', e );
      }// END-try_catch
    },// end-getAllAuthors
    async getAuthor() {
      try {
        const res = await axios.post( 'http://localhost:4002/rootEnd', {
          query: '{ authorByName( id: 2 ) { id jina } }'
        } );// authorByName( id: 1 ) { id jina age writtenWhat }

        this.author = res.data.data.authorByName;
        console.log( 'here' );
      } catch (e) {
        this.status = e
        console.log( 'Err: ', e );
      }// END-try_catch
    }// END-getAuthor
  },// END-methods
}
</script>
