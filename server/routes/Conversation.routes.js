import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createConversation, getConversations } from "../controllers/Conversation.controllers.js";

const router = express.Router();

router.post("/", protect, createConversation);
router.get("/", protect, getConversations);

export default router;
