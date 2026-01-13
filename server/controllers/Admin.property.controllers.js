import Property from "../models/Property.js";

/* Get all pending properties */
export const getPendingProperties = async (req, res) => {
  try {
    const properties = await Property.find({ status: "pending" })
      .populate("owner_id", "name email")
      .sort({ createdAt: -1 });

    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch properties" });
  }
};

/* Approve property */
export const approveProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      {
        status: "approved",
        isAvailable: true,
      },
      { new: true }
    );

    res.json(property);
  } catch {
    res.status(500).json({ message: "Approval failed" });
  }
};

/* Reject property */
export const rejectProperty = async (req, res) => {
  try {
    const { reason } = req.body;

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      {
        status: "rejected",
        isAvailable: false,
        rejectionReason: reason || "Not specified",
      },
      { new: true }
    );

    res.json(property);
  } catch {
    res.status(500).json({ message: "Rejection failed" });
  }
};
