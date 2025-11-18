// routes/mascotaRoutes.js
import { Router } from "express";
import {
  listarMascotas,
  obtenerMascota,
  crearMascota,
  actualizarMascota,
  eliminarMascota,
} from "../controllers/mascotaController.js";

const router = Router();

router.get("/mascotas", listarMascotas);
router.get("/mascotas/:numeroChip", obtenerMascota);
router.post("/mascotas", crearMascota);
router.put("/mascotas/:numeroChip", actualizarMascota);
router.delete("/mascotas/:numeroChip", eliminarMascota);

export default router;