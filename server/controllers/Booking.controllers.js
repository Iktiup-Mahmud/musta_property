import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create({
    property_id: req.body.propertyId,
    buyer_id: req.user.id,
    bookingDate: req.body.date,
  });
  res.status(201).json(booking);
};

export const updateBookingStatus = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(booking);
};
//Buyer requests → Owner approves