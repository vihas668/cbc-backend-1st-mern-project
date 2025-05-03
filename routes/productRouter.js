import express from 'express';
import { getProduct, saveProduct, deleteProduct, updateProduct, getProductById } from '../controls/productcontrols.js';


const productRouter = express.Router();

productRouter.get('/', getProduct) 

productRouter.post('/', saveProduct) 

productRouter.delete('/:productid', deleteProduct)

productRouter.put("/:productid", updateProduct)

productRouter.get("/:productid", getProductById)





export default productRouter;
