import PropertyImage from "../models/Propertyimage.js";
import Property from "../models/Property.js";


export const uploadPropertyImage = async (req, res) => {
  try {
    const { propertyId } = req.body;

    // optional safety check
    const property = await Property.findById(propertyId);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    const image = await PropertyImage.create({
      property_id: propertyId,
      imageUrl: req.file.path, // multer / cloudinary url
    });

    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//Owner dashboard → Add property images
//Admin review page

export const getPropertyImages = async (req, res) => {
  try {
    const images = await PropertyImage.find({
      property_id: req.params.propertyId,
    });

    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//Property details page
//Buyer browsing properties

export const deletePropertyImage = async (req, res) => {
  try {
    await PropertyImage.findByIdAndDelete(req.params.imageId);
    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//Owner dashboard (remove image)
//Admin moderation