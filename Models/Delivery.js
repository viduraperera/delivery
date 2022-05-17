import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  status:{
    type: String,
    required: true,
    default: "Pending"
  },
});

const Delivery = mongoose.model("Delivery", DeliverySchema);

export default Delivery;