const express = require("express");
const router = express.Router();
const controller = require("../controllers/ruc.controller");

router.post("/register", async (req, res) => {
  const { status, message } = await controller.register(req.body);
  res.status(status).json({ message });
});

router.get("/", async (req, res) => {
  const { status, data } = await controller.getAll(req.body);
  res.status(status).json(data);
});

module.exports = router;
