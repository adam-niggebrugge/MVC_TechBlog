const router = require('express').Router();
const homeRoutes = require("./home");
const dashboardRoutes = require("./dashboard");
const blogRoutes = require("./blog");
const authRoutes = require("./auth");

router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/home', homeRoutes);
router.use('/auth', authRoutes);



module.exports = router;
