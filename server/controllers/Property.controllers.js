import Property from "../models/Property.js";
import AdminLog from "../models/AdminLog.js";
import PropertyImage from "../models/Propertyimage.js";
import Document from "../models/Document.js";


export const createProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      owner_id: req.user.id,
    });
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const approveProperty = async (req, res) => {
  const property = await Property.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );

  await AdminLog.create({
    admin_id: req.user.id,
    action: "Approved property",
    target_type: "Property",
    target_id: property._id,
  });

  res.json(property);
};

export const getApprovedProperties = async (req, res) => {
  try {
    const properties = await Property.find({ status: "approved" }).lean();

    const propertyIds = properties.map(p => p._id);

    const images = await PropertyImage.find({
      property_id: { $in: propertyIds }
    });

    const documents = await Document.find({
      property_id: { $in: propertyIds }
    });

    const result = properties.map(p => ({
      ...p,
      images: images
        .filter(i => i.property_id.toString() === p._id.toString())
        .map(i => i.imageUrl),
      documents: documents
        .filter(d => d.property_id.toString() === p._id.toString())
        .map(d => d.fileUrl),
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteProperty = async (req, res) => {
  const property = await Property.findOneAndDelete({
    _id: req.params.id,
    owner_id: req.user.id,
    status: "pending", // optional rule
  });

  if (!property) {
    return res.status(403).json({ message: "Not allowed" });
  }

  res.json({ success: true });
};

// export const getOwnerProperties = async (req, res) => {
//   const properties = await Property.find({
//     owner_id: req.user.id,
//   });

//   res.json(properties);
// };
export const getOwnerProperties = async (req, res) => {
  const properties = await Property.find({ owner_id: req.user.id }).lean();

  const propertyIds = properties.map(p => p._id);

  const images = await PropertyImage.find({
    property_id: { $in: propertyIds }
  });

  const documents = await Document.find({
    property_id: { $in: propertyIds }
  });

  const result = properties.map(p => ({
    ...p,
    images: images
      .filter(i => i.property_id.toString() === p._id.toString())
      .map(i => i.imageUrl),
    documents: documents
      .filter(d => d.property_id.toString() === p._id.toString())
      .map(d => d.fileUrl),
  }));

  res.json(result);
};
export const updateProperty = async (req, res) => {
  const property = await Property.findOneAndUpdate(
    { _id: req.params.id, owner_id: req.user.id, status: "pending" },
    req.body,
    { new: true }
  );
  if (!property) return res.status(403).json({ message: "Cannot update" });
  res.json(property);
};



export const rejectProperty = async (req, res) => {
  const { reason } = req.body;

  const property = await Property.findByIdAndUpdate(
    req.params.id,
    {
      status: "rejected",
      rejectionReason: reason,
    },
    { new: true }
  );

  res.json({
    success: true,
    message: "Property rejected",
    property,
  });
};


