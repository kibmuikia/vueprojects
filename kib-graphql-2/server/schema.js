const { makeExecutableSchema } = require('graphql-tools');
var { find, filter } = require('lodash');

const authorsArray = [
  {
    id: 1,
    jina: 'Strange',
    nationality: 'Kenyan',
    age: 23
  },
  {
    id: 2,
    jina: 'Lexy',
    nationality: 'Jamaican',
    age: 26
  },
  {
    id: 3,
    jina: 'Hulk',
    nationality: 'Marvel',
    age: 20
  }
]
const novelsArray = [
  {
    id: 1,
    title: 'book1',
    type: 'Motivational',
    authorId: 1
  },
  {
    id: 2,
    title: 'book2',
    type: 'Fiction',
    authorId: 2
  },
  {
    id: 3,
    title: 'book3',
    type: 'Iko tu',
    authorId: 3
  },
];

const typeDefs = `
  type Author {
    id: Int,
    jina: String,
    nationality: String,
    age: Int,
    writtenWhat: [Novel]
  }

  type Novel {
    id: Int,
    title: String,
    type: String,
    author: Author
  }

  type Query {
    authors: [Author],
    authorByName( id: Int ): Author,
    novels: [Novel],
    novelByTitle( title: String ): Novel
  }
`;

const resolvers = {
  Query: {
    authors: () => authorsArray,
    novels: () => novelsArray,
    authorByName: ( _,{id} ) => find( authorsArray, {id} ),
    /*novelByTitle: ( _,{ title } ) => {
      return vitabu.find(x => x.title === title)
    }*///  ( _,{title} ) => find( vitabu, {title} ),
    novelByTitle: ( _,{title} ) => find( novelsArray, {title} )
  }/*,
  Author: {
    writtenWhat: author => filter( novelsArray, { authorId: author.id } ),
    // posts: author => filter(posts, { authorId: author.id }),
  },
  Novel: {
    //author: novel => find( authorsArray, { id: novel.authorId } ),
    // author: post => find(authors, { id: post.authorId }),
  }*/
}
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
module.exports = schema;
