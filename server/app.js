import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import propertyRoutes from "./routes/Property.routes.js"
import documentRoutes from "./routes/Document.routes.js"
import bookingRoutes from "./routes/Booking.routes.js"
import propertyImageRoutes from "./routes/Propertyimage.routes.js"
import savedPropertyRoutes from "./routes/SavedProperty.routes.js";
import contactRoutes from "./routes/Contact.routes.js";

import conversationRoutes from "./routes/Conversation.routes.js";
import messageRoutes from "./routes/Message.routes.js";

import cors from "cors";

import path from "path";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));



app.use(express.json());
connectToDB();

app.use("/api/auth", authRoutes);

app.use("/api/properties", propertyRoutes);

app.use("/api/documents", documentRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/property-images", propertyImageRoutes);

app.use("/api/saved-properties", savedPropertyRoutes);

app.use("/api/contact", contactRoutes);


app.use("/api/conversations", conversationRoutes);

app.use("/api/messages", messageRoutes);


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/", (req, res) => {
  res.send("✅ Server is working perfectly!");
});



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });

export default app;