import { GraphQLClient } from 'graphql-request';

export { gql } from 'graphql-request';

export const grafbase = new GraphQLClient(
    process.env.GRAPH_CMS_ENDPOINT,
    {
        headers: {
        'x-api-key': process.env.GRAPH_CMS_API_KEY
        }
    }
);
