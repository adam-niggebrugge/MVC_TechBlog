const router = require('express').Router();
const loginRoutes = require("./login");
const bloggingRoutes = require("./blog");
const commentingRoutes = require("./comment");

router.use('/login', loginRoutes);
router.use('/blogs', bloggingRoutes);
router.use('/comment', commentingRoutes);

module.exports = router;
