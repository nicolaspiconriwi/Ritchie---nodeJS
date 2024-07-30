import express from 'express'
import { routes } from './routes/router.js';

const app = express();

// middleware to handle json format
app.use(express.json())

//Llamar un enrutador
app.use('/', routes)

app.listen(3000, () => {
    console.log("El servidor esta arriba en el puerto 3000")
});