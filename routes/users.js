const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getCurrentUser, updateUser } = require("../controllers/users");
const {
  validateClothingItem,
  validateUserCreationInfo,
  validateUserLoginInfo,
  validateUserId,
  validateItemId,
  validateId,
} = require("../middlewares/validation");

router.use(auth);
router.get("/me", validateId, getCurrentUser);
router.patch("/me", validateId, updateUser);

module.exports = router;
