const express = require('express');
const authRoutes = require('./routes/auth-route')
const env = require('dotenv').config()
const passportSetup = require('./config/passport-setup')
const app = express();

//set up view engine
app.set('view engine', 'ejs')

//set up routes
app.use('/auth', authRoutes)

//home route
app.get('/', (req, res)=> {
    res.render('home')
})
app.listen(7878, ()=> console.log("app started on 7878 port"))