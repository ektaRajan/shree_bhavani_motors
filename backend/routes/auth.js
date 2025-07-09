const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../handlers/auth");

router.post("/register" , async(req,res) => {
    let model = req.body;
    if(model.name && model.email && model.password){
        await registerUser(model);
        res.send({
            message:"User Registered",
        });
    }
    else{
        res.status(400).json({
        error:"provide please name, email and password",
        });
    }
});

router.post("/login" , async(req,res) => {
    let model = req.body;
    if(model.email && model.password){
      const result = await loginUser(model);
      if(result){
        res.send(result);
      }
     else{
        res.status(400).json({
        error:"email or password is incorrect",
        });
    }
    }
    else{
        res.status(400).json({
        error:"provide please email and password",
        });
    }
});

module.exports = router;