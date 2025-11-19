import express, { Request, Response } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import router from "./routes/routes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const characterRouter = router;

// for frontend
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// routes
app.use("/api/characters", characterRouter);

// error handler (must be last)
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
