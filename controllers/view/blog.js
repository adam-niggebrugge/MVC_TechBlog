const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/new', withAuth, async (req, res) => {
    try{
        res.render("blogNew")
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        res.render("blogPost")
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/edit/:id', async (req, res) => {
    try{
        res.render("blogEdit")
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
