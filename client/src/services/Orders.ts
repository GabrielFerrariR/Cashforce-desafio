import api from ".";

export default {
  getAll: async () => {
    return (await api.get('/orders')).data
  }
}