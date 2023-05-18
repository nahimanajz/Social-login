import express from 'express';
import dotenv from 'dotenv';
import passportSetup from './config/passport-setup';
import passportMicrosoftSetup from './config/passport-microsoft';
import authRoutes from './routes/auth-route';
import session from 'express-session';

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport and Microsoft authentication
passportSetup(app);
passportMicrosoftSetup(app);

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