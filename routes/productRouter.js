import express from 'express';
import { getProduct, saveProduct, deleteProduct } from '../controls/productcontrols.js';


const productRouter = express.Router();

productRouter.get('/', getProduct) 

productRouter.post('/', saveProduct) 

productRouter.delete('/:productid', deleteProduct)



export default productRouter;
