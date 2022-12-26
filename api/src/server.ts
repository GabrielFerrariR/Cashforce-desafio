import 'express-async-errors';
import app from './app';
const PORT = Number(process.env.API_PORT) || 3001;
app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
