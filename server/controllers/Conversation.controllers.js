import Conversation from "../models/Conversation.js";

export const createConversation = async (req, res) => {
  const convo = await Conversation.create({
    property_id: req.body.propertyId,
    buyer_id: req.user.id,
    owner_id: req.body.ownerId,
  });
  res.status(201).json(convo);
};

export const getConversations = async (req, res) => {
  const convos = await Conversation.find({
    $or: [{ buyer_id: req.user.id }, { owner_id: req.user.id }],
  }).populate("property_id");
  res.json(convos);
};
//