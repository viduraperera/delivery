import express from "express";
const router = express.Router();

import { getDelivery, getDelivery, createDelivery, updateDelivery, deleteDelivery } from "../Controllers/deliveryController.js";

router.get("/", getDeliveries);
router.get("/:id", getDelivery);
router.post("/", createDelivery);
router.patch("/:id", updateDelivery);
router.delete("/:id", deleteDelivery);

export default router;
