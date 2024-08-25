import { Router } from "express";
const router = Router();

import { heroPage, aboutPage } from "../controller/index.js";

router.get("/", heroPage);
router.get("/about", aboutPage);

export default router;
