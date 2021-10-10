const router = require('express').Router();
const blog = require('../../utils/quick.json');

router.get('/', async (req, res) => {
    //fake session variable represent
    const userId = 1;

    try{
        console.log(`++++++++++++++++++++++++++++++++
        +
        + is there data? 
        +
        +${JSON.stringify(blog)}
        +
        ++++++++++++++++++++++++++++++++++`);

        //mapping concept. same data plus additional isAuthor attribute of
        // if coming from database must be seralirzed
        const blogsMap = blog.map((blog) => {
            return{
                ...blog,
                isAuthor: blog.user.userId === userId,
            };
       });
       console.log(`******
       * 
       * what is going on??
       * 
       * ${JSON.stringify(blogsMap)}
       * ***************************`);
           res.render("home", {blogs: blogsMap});
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
