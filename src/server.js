import { veiculosRouter } from "./routes/route.js";
import express from "express";

const port = 3000
const app = express();

app.use(express.json())
app.use("/veiculos", veiculosRouter)

app.listen (port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})