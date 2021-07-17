import express from "express";

const PORT = 3333;
const HOST = '0.0.0.0';

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(PORT, HOST, () => console.log("Server is running!"));
