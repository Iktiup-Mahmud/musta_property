import Notification from "../models/Notification.js";
import SavedProperty from "../models/Saveproperty.js";

export const notifyPriceDrop = async (propertyId, newPrice) => {
  const savedUsers = await SavedProperty.find({ property_id: propertyId });

  for (const s of savedUsers) {
    await Notification.create({
      user_id: s.buyer_id,
      title: "Price Dropped!",
      message: `Property price reduced to ৳${newPrice}`,
      type: "price_drop",
    });
  }
};

export const getNotifications = async (req, res) => {
  const notes = await Notification.find({ user_id: req.user.id });
  res.json(notes);
};
