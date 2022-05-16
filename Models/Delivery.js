import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Delivery = mongoose.model("Delivery", DeliverySchema);

export default Delivery;