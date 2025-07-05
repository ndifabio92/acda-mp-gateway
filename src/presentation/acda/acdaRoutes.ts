import express from "express"
import { processPayment } from "./acdaController";

const router = express.Router();
router.post("/payments/:payment_id/process-acda", processPayment);

export default router;