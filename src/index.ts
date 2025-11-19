import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import router from "./routes/routes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
const characterRouter = router;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// routes
app.use("/characters", characterRouter);

// error handler
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
