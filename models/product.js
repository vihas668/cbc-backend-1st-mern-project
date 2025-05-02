import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productid: { type: String, required: true,unique: true },
    productName: { type: String, required: true },
    altNames:[{ type: String, required: true }]   ,
    droductDescription: { type: String, required: true },
    Image:[{ type: String, required: true }],
    labelPrice: { type: Number, required: true },
    price: { type: Number, required:true },
    stock: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true, default: true },
     
});

const Product = mongoose.model("Product", productSchema);

export default Product;