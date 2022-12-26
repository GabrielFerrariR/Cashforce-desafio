
import { Router } from 'express';
import OrderService from '../services/Orders.service';
import OrderController from '../controllers/Order.controller';

const service = new OrderService();
const controller = new OrderController(service);

const router = Router();

router.get('/', (req, res, next) => controller.read(req, res, next));
export default router;