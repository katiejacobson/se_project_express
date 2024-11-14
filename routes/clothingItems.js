const router = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");
const {
  validateClothingItem,
  validateUserCreationInfo,
  validateUserLoginInfo,
  validateUserId,
  validateItemId,
  validateId,
} = require("../middlewares/validation");

router.get("/", getItems);

router.use(auth);
router.post("/", validateClothingItem, createItem);
router.delete("/:itemId", validateId, deleteItem);

router.put("/:itemId/likes", validateId, likeItem);
router.delete("/:itemId/likes", validateId, dislikeItem);

module.exports = router;
