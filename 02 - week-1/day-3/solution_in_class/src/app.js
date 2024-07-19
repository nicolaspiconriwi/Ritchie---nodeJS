import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.handler.js';
import routerAnime from './routes/animes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use('/animes', routerAnime);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`El puerto esta siendo escuchado correctamente en http://localhost:${PORT}`);
})


