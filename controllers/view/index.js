const router = require('express').Router();
const homeRoutes = require("./home");
const dashboardRoutes = require("./dashboard");
const blogRoutes = require("./blog");
const authRoutes = require("./auth");

router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/', authRoutes);



module.exports = router;
