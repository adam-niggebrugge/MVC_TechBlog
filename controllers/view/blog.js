const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/new', withAuth, async (req, res) => {
    try{
        res.render("blogNew")
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id',  async (req, res) => {
    try{
        const viewableBlog = await Blog.findOne({
            where: {id: req.params.id},
            attributes: ['id','title','body','date_created'],
            include: [{ model: Comment, attributes: ['body', 'created_at'], 
                    include: {model: User, attributes: ['name']}}],
            include: [{model: User, attributes: ['name']}]
        })
        const sentBlog = viewableBlog.get({plain: true});
        
        res.status(200).json({blog: sentBlog, logged_in: req.session.logged_in})
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const editableBlog = await Blog.findOne({
            where: {id: req.params.id},
            attributes: ['id','title','body','date_created']
        })
        const sentBlog = editableBlog.get({plain: true});
        res.render("blogEdit", {blog: sentBlog, logged_in: req.session.logged_in})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
