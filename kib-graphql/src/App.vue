<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Kib</span>
        <span class="font-weight-light">GRAPHQL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
        <v-container>
          <v-layout column align-center>
            <v-flex xs12 m6>
              <span> <v-btn small @click='getLang' > Get Language </v-btn> </span>
              <span> {{ example1 }} </span>
            </v-flex>
            <v-flex xs12 m6>
              <span> <v-btn small @click='getAge' > Get Age </v-btn> </span>
              <span> {{ example2 }} </span>
            </v-flex>
            <v-flex xs12 m6>
              <span> <v-btn small @click='getChamp' > Get Champions </v-btn> </span>
              <span> <p v-for="champion in example3" :key="champion.name"> {{ champion }} </p> </span>
            </v-flex>
            <v-flex xs12 m6>
              <span> <v-btn small @click='getChampionByName' > Get Champ via [Name] </v-btn> </span>
              <span> <p> {{ example4 }} </p> </span>
            </v-flex>
            <v-flex xs12 m6>
              <span> <v-btn small @click='getAllVitabu' > Get All Books </v-btn> </span>
              <span> <p v-for="book in example5" :key="book.title"> {{ book.title }} - {{ book.id }} </p> </span>
            </v-flex>
            <hr>
            <v-flex xs12 m6 class="ma-4">
              <div class="">
                <span left>Status: </span>
                <div class="">
                  {{ msg }}
                </div>
              </div>
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
      msg: '',// messages
      example1: '',// for language
      example2: '',// for age
      example3: [],// for champions
      example4: [],// for champ by Name
      example5: [],// for vitabu
    }
  },// END-data()
  methods: {
    async getLang() {
      try {
        const res = await axios.post( 'http://localhost:4000/graphql', {
          query: '{ language }'
        } )
        this.example1 = res.data.data.language
      } catch (e) {
        this.msg = e
        //console.log('Err: ', e);
      }// END-try_catch
    },
    async getAge() {
      try {
        const res = await axios.post( 'http://localhost:4000/graphql', {
          query: '{ age }'
        } )
        this.example2 = res.data.data.age
      } catch (e) {
        this.msg = e
        //console.log('Err: ', e);
      }// END-try_catch
    },
    async getChamp() {
      try {
        const res = await axios.post( 'http://localhost:4000/graphql', {
          query: '{ getChampions { name } }'
        } )
        this.example3 = res.data.data.getChampions
      } catch (e) {
        this.msg = e
        //console.log('Err: ', e);
      }// END-try_catch
    },
    async getChampionByName() {
      try {
        const res = await axios.post( 'http://localhost:4000/graphql', {
          query : '{ getChampByName(name:"Lixy"){ name attackDamage} }'
        } )
        this.example4 = res.data.data.getChampByName
      } catch (e) {
        this.msg = e
        console.log('Err: ', e);
      }// END-try_catch
    },
    async getAllVitabu(){
      try {
        const res = await axios.post( 'http://localhost:4001/graphql-2', {
          query : '{ vitabu { title id } }'
        } )
        this.example5 = res.data.data.vitabu;
      } catch (e) {
        this.msg = e;console.log('Err: ', e);
      }// END-try_catch
    }
  },// END-methods
}// END-export
</script>
