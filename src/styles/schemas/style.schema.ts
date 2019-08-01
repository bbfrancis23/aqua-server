import * as mongoose from 'mongoose'

export const StyleSchema = new mongoose.Schema({
  title: String,
  description: String,
})
