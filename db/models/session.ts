import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const sessionSchema = new Schema({

  title: {
    type: String,
    unique: false,
    required: true
  },

  description: {
    type: String,
    unique: false,
    required: true
  },

  speakers: [{
    type: Schema.Types.ObjectId,
    ref: 'Speaker'
  }]
})

export const session = mongoose.model('Session', sessionSchema)
