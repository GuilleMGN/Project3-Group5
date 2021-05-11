const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

router.route("/").get(userControllers.findAll).post(userControllers.create);
router
  .route("/:id")
  .get(userControllers.findById)
  .delete(userControllers.remove)
  .put(userControllers.update);

router.post("/signup", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  //console.log(req.body);
  //console.log(errors);
  //console.log(isValid);
  // Check validation
  if (!isValid) {
    //console.log(errors);
    res.json({ errors });
    
    //return res.status(400);
    //throw Error ("not found");
  } else {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        //console.log("user", user);
        //return res.status(400).json({ email: "Email already exists" });
        errors.email = "Email already exists";
        res.json({errors});
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        console.log("body", req.body);
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                res.json(user);
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  }
});

router.post("/login", (req, res) => {
  // Form validation
  //console.log(req.body);
  const { errors, isValid } = validateLoginInput(req.body);
  //console.log(errors);
 // console.log(isValid);
  // Check validation
  if (!isValid) {
    res.json({ errors });
    //return res.status(400).json(errors);
  }else {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then((user) => {
      // Check if user exists
      if (!user) {
        //return res.status(404).json({ emailnotfound: "Email not found" });
        errors.email= "Email not found";
        res.json({errors });
      }else {
              // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
          if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
              id: user.id,
              name: user.name,
            };
            // Sign token
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926, // 1 year in seconds
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                  user: user.name,
                });
                //res.redirect("/");
              }
            );
          } else {
            //return res.status(400)
              //.json({ passwordincorrect: "Password incorrect" });
              errors.password= "Password incorrect" ;
              res.json({errors});
          }
        });
  
      }
  
    })
    .catch(err => console.log(err));

  }

});

module.exports = router;
