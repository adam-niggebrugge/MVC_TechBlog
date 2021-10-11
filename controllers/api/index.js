const router = require('express').Router();
const loginRoutes = require("./login");
const bloggingRoutes = require("./blog");


router.use('/login', loginRoutes);
router.use('/blogs', bloggingRoutes);


module.exports = router;
