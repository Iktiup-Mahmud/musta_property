import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { role, name, email, password } = req.body;

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      role,
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    const { password: pw, ...userData } = user._doc;

    return res.status(201).json({
      message: "Signup successful",
      token: generateToken(user._id),
      user: userData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: "Invalid email or password" });

    const { password: pw, ...userData } = user._doc;

    return res.status(200).json({
      message: "Login successful",
      token: generateToken(user._id),
      user: userData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

