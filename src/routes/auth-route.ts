import { Router } from 'express';
import passport from 'passport';

const router = Router();

//auth-login
router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout
router.get("/logout", (req, res) => {
  //handle iwth passport
  res.send("handle with passport");
});

//auth with google then call strategy
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// auth callback for google to redirect to

router.get(
    "/google/redirect",
    passport.authenticate("google", {
      failureRedirect: "/login/failed",
    }), (req, res)=>{
        
        return res.send({message:"API WORKS",data: req.user})
    }
  );

/*
router.get(
    "/google/redirect",
    passport.authenticate("google", {
      successRedirect: "http://localhost:7878", //fronentd
      failureRedirect: "/login/failed",
    })
  );
*/
//Microsoft
router.get("/microsoft",
   passport.authenticate("microsoft"));

router.get(
  "/microsoft/redirect",
  passport.authenticate("microsoft"),
  (req, res) => {
    res.send({message: "Miscrosoft Authenticated", data: req.user});
  }
);
export default router;
