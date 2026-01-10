import express from "express";
import {
  uploadPropertyImage,
  getPropertyImages,
  deletePropertyImage,
} from "../controllers/PropertyImage.controllers.js";
import { protect } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("image"),
  uploadPropertyImage
);

router.get("/:propertyId", getPropertyImages);

router.delete("/:imageId", protect, deletePropertyImage);

export default router;
