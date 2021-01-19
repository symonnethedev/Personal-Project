const express = require("expresss");
const router = express.router();

const Authcontroller = require("../controllers/Authcontroller");

router.post("/register", Authcontroller.register);
router.post("/login", Authcontroller.login);

module.exports = router;
