const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const blogData = await Blog.findAll({
            where: { user_id: req.session.user_id},
            include: [User],
        });

        const sendingblogs = blogData.map((blog) => blog.get({plain:true}));

        res.render("dashboard", {blogs: sendingblogs, logged_in : true})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
