const { makeExecutableSchema } = require('graphql-tools');
var { find, filter } = require('lodash');

const writers = [
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
const vitabu = [
  {
    id: 1,
    title: 'book1',
    type: 'Motivational',
    author: 'Strange'
  },
  {
    id: 2,
    title: 'book2',
    type: 'Fiction',
    author: 'Lexy'
  },
  {
    id: 3,
    title: 'book3',
    type: 'Iko tu',
    author: 'Hulk'
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
    authors: () => writers,
    novels: () => vitabu,
    authorByName: ( _,{id} ) => find( writers, {id} ),
    /*novelByTitle: ( _,{ title } ) => {
      return vitabu.find(x => x.title === title)
    }*///  ( _,{title} ) => find( vitabu, {title} ),
    novelByTitle: ( _,{title} ) => find( vitabu, {title} )
  },
  Author: {
    writtenWhat: author => filter( vitabu, { authorId: author.id } ),
    // posts: author => filter(posts, { authorId: author.id }),
  },
  Novel: {
    author: novel => find( writers, { id: novel.authorId } ),
    // author: post => find(authors, { id: post.authorId }),
  }
}
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
module.exports = schema;
