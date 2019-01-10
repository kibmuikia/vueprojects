const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const Champion = require('./champion')
var { find } = require('lodash');

const schema = buildSchema( `
  type Query {
    language: String,
    age: Int,
    getChampions: [ Champion ],
    getChampByName(name: String): Champion
  }

  type Champion {
    name: String,
    attackDamage: Float
  }
` )
const champions = [
  new Champion( 'Lixy', 200.896 ),
  new Champion( 'Alice', 430.321 ),
]

const rootValue = {
  age: () => 30,
  language: () => 'My mother tongue is Kikuyu',
  getChampions: () => champions,
  getChampByName: ({ name }) => {
    return champions.find(x => x.name === name)
  }//(_,{name}) => find(champions, {name})
}

const app = express();
app.use( cors() );

app.use( '/graphql', graphqlHTTP({
  rootValue, schema, graphiql: true
}) );

app.listen( 4000, () => console.log('Listening on 4000') );
