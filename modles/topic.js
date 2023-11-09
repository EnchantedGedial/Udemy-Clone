import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true, "Please provide a username"],
      unique: true,
  },
  // category: {
  //     type: String,
  //     // required: [true, "Please provide a email"],
      
  // },
  // description: {
  //     type: String,
  //     // required: [true, "Please provide a password"],
  // },
  // price: {
  //     type: Number,
  //     // required: [true, "Please provide a password"],
  // },
  
  },

);

const User = mongoose.models.user || mongoose.model("udemy_clone", topicSchema);

export default User;