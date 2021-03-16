const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/users", adminController.findUsers);
router.delete("/users/:id", adminController.deleteUser);
router.put("/users/:id", adminController.update);

router.post("/categorias", adminController.createCategories);

module.exports = router;
