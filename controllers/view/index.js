const router = require('express').Router();
const homeRoutes = require("./home");
const dashboardRoutes = require("./dashboard");
const blogRoutes = require("./blog");
const loginRoutes = require("./login");

router.use('/blogs', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/', loginRoutes);



module.exports = router;
