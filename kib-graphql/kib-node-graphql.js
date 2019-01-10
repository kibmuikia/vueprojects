const express = require( 'express' );
const { makeExecutableSchema } = require( 'graphql-tools' );
const graphqlHTTP = require( 'express-graphql' );
var { find } = require('lodash');

const typeDefs = `
  type Query {
    vitabu: [Kitabu]
    kitabu(id: Int): Kitabu
  }

  type Kitabu {
    id: ID
    title: String
  }
`;
var vitabu = [
  {
    id: 1,
    title: 'Hii ni title'
  },
  {
    id: 2,
    title: 'The Rangler'
  }
]
const resolvers = {
  Query: {
    vitabu: () => vitabu,
    kitabu: (_, { id }) => find(vitabu, { id })
  }
}
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const app = express();
app.use( '/graphql', graphqlHTTP({
  schema, graphiql: true
}) );
app.listen( 4001, () => console.log('Listening on 4001') );
