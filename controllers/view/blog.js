const router = require('express').Router();

router.get('/new', async (req, res) => {
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
