import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mainRouter from "../src/routes/index.js";

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.set("trust proxy", 1);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(mainRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
