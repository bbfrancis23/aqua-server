import * as mongoose from 'mongoose'
import { ThemeSchema } from '../../themes/schemas/theme.schema'
import { StyleSchema } from '../../styles/schemas/style.schema'

export const ConfigSchema = new mongoose.Schema({
  theme: ThemeSchema,
  style: StyleSchema,
})
