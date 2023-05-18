const router = require('express').Router();
const passport = require('passport')


//auth-login
router.get('/login', (req, res)=>{
    res.render('login');
})

//auth logout
router.get('/logout',(req, res)=>{
   //handle iwth passport
    res.send('handle with passport')
})

//auth with google then call strategy
router.get('/google', passport.authenticate('google',{
    scope: ['profile','email']
}))

// auth callback for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send("You have reached callback URI")
})

module.exports = router