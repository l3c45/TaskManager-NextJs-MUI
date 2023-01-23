import mongoose, { Model, Schema } from "mongoose";
import type {Entry} from "../../types"

export interface IEntrie extends Entry {}

const entrieSchema = new Schema({
  description: String,
  status: {
    type: String,
    enum: {
      values: ["pending", "current", "done"],
      message: "{VALUE } no es permitido  ",
    },
  },
  create: {type:Number},
});

const EntryModel:Model<IEntrie>=mongoose.models.Entry || mongoose.model("Entry",entrieSchema)

export default EntryModel
