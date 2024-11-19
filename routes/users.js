const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getCurrentUser, updateUser } = require("../controllers/users");
const { validateUserUpdateInfo } = require("../middlewares/validation");

router.use(auth);
router.get("/me", getCurrentUser);
router.patch("/me", validateUserUpdateInfo, updateUser);

module.exports = router;
