import mongoose, { Model, Schema } from "mongoose";
import type {Entrie} from "../../types"

interface IEntrie extends Entrie {}

const entrieSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: {
      values: ["pending", "current", "done"],
      message: "{VALUE } no es permitido  ",
    },
  },
  create: Number,
});

const EntrieModel:Model<IEntrie>=mongoose.models.Entry || mongoose.model("Entrie",entrieSchema)

export default EntrieModel
