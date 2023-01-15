const mongoose = require("mongoose");
//An schema is a config object.
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true, //no 2 bootcamp of same name.
    trim: true,
    maxlength: [50, "Name can not be more than 50 words"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a desc"],

    maxlength: [500, "Name can not be more than 500 words"],
  },
  website: {
    type: String,
    match: [
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
      "Please fill correct website address",
    ],
  },
  phone: {
    type: String,
    maxLength: [10, "improper phone no"],
  },
  email: {
    type: String,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "improper email"],
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
      index: "2dsphere",
    },
  },
  street: String,
  city: String,
  careers: {
    // Array of strings
    type: [String],
    required: true,
    enum: ["Front-End", "Back-End", "Data-Science","Full-Stack","Web Development", "UI/UX", "Business"],
  },
  rating: {
    type: Number,
    min: [1, "Rating should be atleast 1"],
    max: [10, "Rating should be less than 10"],
  },
  photo:{
    type:String,
    default:'no-photo.jpg'
  },
  jobGuarantee:{
    type:Boolean,
    default:false,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

//mongoose.model(<Collectionname>, <CollectionSchema>)

module.exports = mongoose.model('Bootcamp',BootcampSchema);