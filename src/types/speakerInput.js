const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require("graphql");

module.exports = new GraphQLInputObjectType({
  name: "SpeakerInput",
  description:
    "A speaker is defined as someone who actually speaks but not to be confused with anyone who can speak.",
  fields: () => ({
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Speakers First Name"
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Speakers Last Name"
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Speakers Email Address"
    }
  })
});
