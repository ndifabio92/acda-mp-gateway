import { Router } from "express";
import healthRoutes from "../health/healthRoutes";
import mercadoPagoRoutes from "../mercadoPago/mercadoPagoRoutes";
import acdaRoutes from "../acda/acdaRoutes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/mercadopago", mercadoPagoRoutes);
router.use("/acda", acdaRoutes);

export default router;