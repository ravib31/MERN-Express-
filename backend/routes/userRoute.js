const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/user");
const router = express.Router();
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  const User = require("../models/user");
  try {
    const userAdd = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(200).json(userAdd);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// get single user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//delete single user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const showAll = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Update the user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
