const express = require("expresss");
const router = express.router();

const Usercontroller = require("../controllers/Usercontroller");
const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, Usercontroller.index);
router.post("/show", Usercontroller.show);
router.post("/store", Usercontroller.store);
router.post("/update", Usercontroller.update);
router.post("/delete", Usercontroller.destroy);

module.exports = router;
