import { Document } from 'mongoose'
import { Theme } from '../../themes/interfaces/theme.interface'
import { Style } from '../../styles/interfaces/style.interface'

export interface Config extends Document {
  readonly theme: Theme
  readonly style: Style
}
