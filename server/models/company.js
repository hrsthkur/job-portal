import mongoose, { mongo } from "mongoose";

const comapnySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  password: { type: String, required: true },
});

const Company = mongoose.model('Company',comapnySchema)

export default Company