import  {GraphQLList} from 'graphql'

import * as logger        from '../../utility/logger'
import * as  getProjection from '../../utility/projections'

import  {sessionType} from '../../types'
import  {Sessions}    from '../../db/mongo'


export = {
  type: new GraphQLList(sessionType), //how is this an array?
  description: 'The sessions query will return you a list of all accepted sessions blaa blaa blaa.',
  //deprecationReason: 'reason here', // this is valid on an operation as well
  args: {},
  resolve: (root, args, options, fieldASTs) => {
    return new Promise((resolve, reject) => {
      logger.debug(`in speakers query`)
      const projection = getProjection(fieldASTs)
      Sessions.find({})
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}