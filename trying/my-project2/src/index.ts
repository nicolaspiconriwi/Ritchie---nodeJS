import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/Router';
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});