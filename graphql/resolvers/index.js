const postsResolvers = require("./posts");
const usersResolvers = require("./users");

const resolvers = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};

module.exports = resolvers;
