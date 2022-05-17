import express from "express";
import Delivery from "../Models/Delivery.js"
import Order from "../Models/Order.js"
import User from "../Models/UserModel.js"

const router = express.Router();

export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find({}).populate({
      path: "order_id",
      model: "Order",
      populate: {
        path: "customer",
        model: "User"
      }
    })
    return res.status(200).send(deliveries);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findById({ _id: req.params.id });
    if (!delivery) return res.status(404).send("Delivery not found");
    return res.status(200).send(delivery);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createDelivery = async (req, res) => {
  try {
    const delivery = new Delivery({ ...req.body });
    const emailData = {
      email: user.email,
      subject: 'Your Order has been Dispatched',
      message: `Your Order has been placed, Your order id is ${delivery.order_id}`
    }
    await axios.post(`${process.env.EMAIL_ENDPOINT}`, emailData);
    delivery.save((error, savedDelivery) => {
      if (error) return res.status(400).send(error);
      return res.status(201).send(savedDelivery);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const updateDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findOne({ _id: req.params.id });
    if (!delivery) return res.status(404).send("Delivery does not exits");

    await Delivery.updateOne({ _id: req.params.id }, req.body);
    if (delivery.status !== 'Pending') {
      const emailData = {
        email: user.email,
        subject: 'Your Order has been Delivered',
        message: `Your Order has been Delivered, Your order id is ${delivery.order_id}`
      }
    }
    await axios.post(`${process.env.EMAIL_ENDPOINT}`, emailData);
    return res.status(200).send("Delivery updated");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findOne({ _id: req.params.id });
    if (!delivery) return res.status(404).send("Delivery does not exits");
    await Delivery.deleteOne({ _id: req.params.id })
    return res.status(200).send("Delivery deleted");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default router;
