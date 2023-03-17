import { Router } from "express";
import { newUser, getUsers } from "../controllers/users.controller.js";

const router = Router()

router.get('/user', getUsers);
router.post('/user/new', newUser);

export default router;