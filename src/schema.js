const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date
  scalar JSON

  interface Device {
    id: String!
    name: String!
  }

  type Light implements Device {
    id: ID!
    name: String!
    status: Boolean!
  }

  type Query {
    listDevices: [Device!]!
    getLight(id: ID!): Light!
  }

  type Mutation {
    updateLight(id: ID!, status: Boolean!): Light!
  }
`;
