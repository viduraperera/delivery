import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  cartItems:[
    {
      cartItem:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        },
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status:{
    type: String,
    required: true,
    default: "Pending"
  },
},{ timestamps: true });

let Order = mongoose.model("Order", OrderSchema);

export default Order;
