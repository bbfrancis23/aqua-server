import * as mongoose from 'mongoose';

export const ThemeSchema = new mongoose.Schema({
  title: String,
  primary: String,
  accent: String,
});
