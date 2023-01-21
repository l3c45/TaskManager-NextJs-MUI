import mongoose, { Model, Schema } from "mongoose";
import type {Entrie} from "../../types"

export interface IEntrie extends Entrie {}

const entrieSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: String,require:true,
    enum: {
      values: ["pending", "current", "done"],
      message: "{VALUE } no es permitido  ",
    },
  },
  create: {type:Number},
});

const EntrieModel:Model<IEntrie>=mongoose.models.Entrie || mongoose.model("Entrie",entrieSchema)

export default EntrieModel
