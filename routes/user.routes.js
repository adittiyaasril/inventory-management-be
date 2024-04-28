const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.post("/", UserController.createUser);
router.post("/login", UserController.loginUser);
router.post("/logout", UserController.logoutUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
