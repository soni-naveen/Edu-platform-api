const Course = require("../models/Course");

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({
      message: "Course successfully created",
      course,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        error: "Course not found",
      });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!course) {
      return res.status(404).json({
        error: "Course not found",
      });
    }
    res.status(200).json({
      message: "Course successfully updated",
      course,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({
        error: "Course not found",
      });
    }
    res.status(200).json({
      message: "Course successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
