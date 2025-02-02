const { Router } = require("express");
const isAdmin = require("../middlewares/is.Admin");
const isAuth = require("../middlewares/is.Auth");
const {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLessonById,
  deleteLessonById,
} = require("../controllers/lessons.controller");

const router = Router();

router.post("/", isAdmin, createLesson);
router.get("/", isAuth, getAllLessons);
router.get("/:id", isAuth, getLessonById);
router.put("/:id", isAdmin, updateLessonById);
router.delete("/:id", isAdmin, deleteLessonById);

module.exports = router;
