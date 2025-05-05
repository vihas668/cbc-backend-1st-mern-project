import express from 'express';
import { createOrder } from '../controls/ordercontrols.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder)

export default orderRouter;


