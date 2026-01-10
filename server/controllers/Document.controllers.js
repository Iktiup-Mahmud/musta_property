import Document from "../models/Document.js";

export const uploadDocument = async (req, res) => {
  console.log("req.file:", req.file); // check if file exists
  console.log("req.body:", req.body);

  if (!req.file) {
    return res.status(400).json({ message: "File is required" });
  }
  const doc = await Document.create({
    property_id: req.body.propertyId,
    uploaded_by: req.user.id,
    documentType: req.body.type,
    fileUrl: req.file.path,
  });
  res.status(201).json(doc);
};

export const getDocuments = async (req, res) => {
  const docs = await Document.find({ property_id: req.params.propertyId });
  res.json(docs);
};
//Owner upload → Admin verify