const router = require("express").Router();

const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");
const { createUser, login } = require("../controllers/users");
const {
  validateClothingItem,
  validateUserCreationInfo,
  validateUserLoginInfo,
  validateUserId,
  validateItemId,
  validateId,
} = require("../middlewares/validation");

router.use("/items", itemRouter);
router.use("/users", userRouter);
router.post("/signup", validateUserCreationInfo, createUser);
router.post("/signin", validateUserLoginInfo, login);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Not found." });
});

module.exports = router;
