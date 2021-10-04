const router = require('express').Router();

router.get('/login', async (req, res) => {
    try{
        res.render("login");
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/register", (req, res) => {
    res.render("register");
});



module.exports = router;
