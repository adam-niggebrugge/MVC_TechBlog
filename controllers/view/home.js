const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        res.send("hello worldo");
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
