import { Document } from 'mongoose'

export interface Theme extends Document {
  readonly title: string
  readonly primary: string
  readonly accent: string
}
