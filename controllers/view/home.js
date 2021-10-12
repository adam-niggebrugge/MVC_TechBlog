const router = require('express').Router();
const { Blog, User } = require('../../models');


router.get('/', async (req, res) => {
    try{

        const blogData = await Blog.findAll({
            include: [User],
          });

            const blogsMap = blogData.map((blog) => blog.get({plain:true}));

            res.render("home", {blogs: blogsMap, logged_in: req.session.logged_in});
        
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
