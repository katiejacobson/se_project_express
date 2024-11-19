const router = require("express").Router();

const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { NotFoundError } = require("../utils/errors/not-found-error");
const { createUser, login } = require("../controllers/users");
const {
  validateUserCreationInfo,
  validateUserLoginInfo,
} = require("../middlewares/validation");

router.use("/items", itemRouter);
router.use("/users", userRouter);
router.post("/signup", validateUserCreationInfo, createUser);
router.post("/signin", validateUserLoginInfo, login);

router.use(() => {
  throw new NotFoundError("Not found");
});

module.exports = router;
