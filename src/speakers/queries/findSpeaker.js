import { GraphQLList, GraphQLString } from "graphql";

import { logger } from "../../utility/logger";
import getProjection from "../../utility/projections";
import { speakerType } from "../../types";

// todo.. placeholder to make sure we can reuse a type... resolve is wrong.
module.exports = {
  type: new GraphQLList(speakerType), // how is this an array?
  description:
    "The speakers query will return you a list of all speakers blaa blaa blaa.",
  // deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    userID: {
      name: "userID",
      type: GraphQLString
    }
  },
  resolve: (root, args, { mongo: { Speakers } }, fieldASTs) =>
    new Promise((resolve, reject) => {
      logger.debug(`in speakers query`);
      const projection = getProjection(fieldASTs);
      Speakers.find({ _id: { $in: args.userID } })
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
};
