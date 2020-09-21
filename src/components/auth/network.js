const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require('../../network/response');
const admin = require('firebase-admin');

const serviceAccount = require("../../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://letsrommie2020.firebaseio.com/"
});

const db = admin.database();


//Create user
router.post("/createUser", async (req, res) => {
  try {
    const newAuth = await admin.auth().createUser({
      email: req.body.email,
      emailVerified: true,
      phoneNumber: req.body.phone,
      password: req.body.password,
      displayName: req.body.name,
      disabled: false,
    })
    
    
    response.success(req, res, newAuth, 201);
    console.log('[create newUser]:', newAuth.email)
  } catch (e) {
    response.error(req, res, 'Error creating newUser', 401, e.message)
  }
});

//Login User
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await controller.authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

module.exports = router;
