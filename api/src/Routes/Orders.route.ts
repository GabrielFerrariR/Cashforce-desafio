
import { Router } from 'express';
import OrderService from '../services/Orders.service';
import OrderController from '../controllers/Order.controller';
import Orders from '../models/Orders';

const model = new Orders();
const service = new OrderService(model);
const controller = new OrderController(service);

const router = Router();

router.get('/', (req, res, next) => controller.read(req, res, next));
export default router;