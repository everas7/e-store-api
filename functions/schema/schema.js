const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    title: String!
    description: String
    cost: Float
    price: Float!
    image: String
    category: Category!
    id: ID!
  }
  type Category {
    id: ID!
    name: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
    role: String
  }
  type Query {
    products: [Product]
    categories: [Category]
  }
  type Mutation {
    addProduct(
      title: String!
      description: String
      cost: Float
      price: Float!
      image: String
      category_id: Int!
      id: ID!
    ): String
    addCategory(
      name: String!
      id: ID!
    ): String
  }
`;

module.exports = typeDefs;
