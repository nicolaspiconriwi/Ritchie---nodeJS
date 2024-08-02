"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getAll);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
exports.default = router;
