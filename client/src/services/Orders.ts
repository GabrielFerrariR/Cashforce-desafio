import api from ".";
import { ordersAttributes } from "../interfaces";

export default {
  getAll: async ():Promise<ordersAttributes[]> => {
    return (await api.get('/orders')).data
  }
}