const express = require("express");
const {
  createQuiz,
  getQuizzesByCourseId,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

const router = express.Router();

router.post("/courses/:courseId/quizzes", createQuiz);
router.get("/courses/:courseId/quizzes", getQuizzesByCourseId);
router.get("/quizzes/:id", getQuizById);
router.put("/quizzes/:id", updateQuiz);
router.delete("/quizzes/:id", deleteQuiz);

module.exports = router;
