import { GraphQLClient } from 'graphql-request';

// Defina GRAPHQL_URL no seu .env.local (ex: http://seu-wp.com/graphql)
const endpoint = process.env.GRAPHQL_URL ?? 'http://localhost:10003/graphql';

export const client = new GraphQLClient(endpoint);