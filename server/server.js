import { ApolloServer, gql } from 'apollo-server';
import { GraphQLDateTime } from 'graphql-iso-date';
import {
  UserType,
  PostType,
  UserTypeQueries,
  UserTypeMutations,
  UserResolvers,
}from '../users';
import {
  DBConnect,
}from '../database';

const typeDefs = gql`
  # custom type
  scalar DateTime

  # models
  ${UserType}
  ${PostType}

  # the schema allows the following query:
  ${UserTypeQueries}

  # this schema allows the following mutation:
  ${UserTypeMutations}
`;

const resolvers = {
  DateTime: GraphQLDateTime,
  ...UserResolvers,
};

DBConnect
.then(() => {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  // https://github.com/the-road-to-graphql/fullstack-apollo-express-mongodb-boilerplate/blob/master/src/index.js#L54
  const server = new ApolloServer({ typeDefs, resolvers });

  // The `listen` method launches a web server.
  const portNumber = process.env.GRAPHQL_APP_PORT || 4000
  server.listen(portNumber).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})
.catch((error) => {
  console.log('an error occured while starting DB  : ', error);
});
