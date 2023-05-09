const express = require("express");
const usecontroll = require("../controllers/users");
const router = express.Router();

router.post("/signup", usecontroll.signup);
module.exports = router;