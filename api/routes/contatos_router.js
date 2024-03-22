import express from "express";
import { addContato, deleteContato, getContato, updateContato } from "../controllers/contato.js";

const router = express.Router()

router.get("/", getContato)

router.post("/", addContato)

router.put("/:id", updateContato)

router.delete("/:id", deleteContato)

export default router