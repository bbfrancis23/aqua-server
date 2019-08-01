import { Document } from 'mongoose'

export interface Style extends Document {
  readonly title: string
  readonly description: string
}
