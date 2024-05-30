import express from "express";
import { config } from "dotenv";
config();
const app = express();
//middlewares
app.use(express.json());
//connection and listeneres
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map