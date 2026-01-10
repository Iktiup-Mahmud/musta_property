import express from "express";
import {
  uploadDocument,
  getDocuments,
} from "../controllers/Document.controllers.js";

import { protect } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();


router.post(
  "/upload",
  protect,
  upload.single("file"),   // frontend field name: "file"
  uploadDocument
);

/**
 * @route   GET /api/documents/:propertyId
 * @desc    Get all documents of a property
 * @access  Private (Owner/Admin)
 */
router.get(
  "/:propertyId",
  protect,
  getDocuments
);

export default router;
