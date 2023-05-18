const express = require('express');
const authRoutes = require('./routes/auth-route')
const env = require('dotenv').config()
const passportSetup = require('./config/passport-setup')
const passportMicrosoftSetup = require('./config/passport-microsoft')
var session = require('express-session')

const app = express();


//set up view engine
app.set('view engine', 'ejs')
// configure sessions
var sess = {
    secret: 'keyboard cat',
    cookie: {}
  }
app.use(session(sess))
//set up routes
app.use('/auth', authRoutes)

//home route
app.get('/', (req, res)=> {
    res.render('home')
})
app.listen(7878, ()=> console.log("app started on 7878 port"))