const router = require('express').Router();
const { Blog, User } = require('../../models');


router.get('/', async (req, res) => {
    try{

        const blogData = await Blog.findAll({
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });

        console.log(`++++++++++++++++++++++++++++++++
        +
        + is there data? 
        +
        +${JSON.stringify(blogData)}
        +
        ++++++++++++++++++++++++++++++++++`);
        const blogsMap = [];
        //mapping concept. same data plus additional isAuthor attribute of
        // if coming from database must be seralirzed
        if(req.session.logged_in){
            const userId = req.session.user_id;
            blogsMap = blogData.map((blog) => {
                return{
                    ...blog,
                    isAuthor: blog.user.userId === userId,
                };
            });
            res.render("home", {blogs: blogsMap});
        } else {
            blogsMap = blogData.map((blog) => {
                return{
                    ...blog,
                    isAuthor: false,
                };
            });
            res.render("home", {blogs: blogsMap, logged_in: req.session.logged_in});
        }
       console.log(`******
       * 
       * what is going on??
       * 
       * ${JSON.stringify(blogsMap)}
       * ***************************`);
        
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
