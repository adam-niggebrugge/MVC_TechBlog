const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        res.send("hello blogo");
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
