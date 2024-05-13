import express from "express";
import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


const router = express.Router();

const postuser = async (req, res) => {
  try {
    // Create a new user instance using data from request body
    const password = bcrypt.hashSync(req.body.password, 10);

    const user = await User.create({ ...req.body , password });

    const data = user.toObject();

    delete data.password;
    // Save the user to the database
    // const savedUser = await user.save();
    console.log("User saved:", data);

    var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res
      .status(201)
      .send({ status: 201, message: "User created successfully", data , token});
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
};

export default postuser;
