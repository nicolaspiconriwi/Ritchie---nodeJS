import express from "express";
import dotenv from "dotenv";
import { Router } from "./routes/Router";

// Load environment variables
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

//middlewares
app.use(express.json())

app.use("/api", Router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
