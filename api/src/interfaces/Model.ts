interface Model<T> {
  findAll: () => Promise<T[]>; 
};

export default Model;
