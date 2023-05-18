import express, { Application } from "express";
import session from 'express-session';
import authRoutes from './routes/auth-route';
import path from 'path';
import googleAuth from './config/passport-setup';
import passportMicrosoftSetup from './config/passport-microsoft';



import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 7878;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || "",
  resave: false,
  saveUninitialized: false
}));

//Initialize Passport and Microsoft authentication

//passportSetup(app);
//passportMicrosoftSetup(app);

//set up view engine
app.set('view engine', 'ejs')

// Specify the views directory
app.set('views', path.join(__dirname, 'views'));

//home route
app.get('/', (req, res)=> {
    res.render('home')
})

// configure sessions
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}

app.use(session(sess))

app.use('/auth', authRoutes)
//google social logins
googleAuth()

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});