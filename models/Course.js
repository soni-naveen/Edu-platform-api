const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "none",
  },
  description: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  chapters: [chapterSchema],
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "published",
  },
  visibility: {
    type: String,
    default: "public",
  },
});

module.exports = mongoose.model("Course", courseSchema);
