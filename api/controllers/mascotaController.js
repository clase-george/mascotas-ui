// controllers/mascotaController.js
import { Op } from "sequelize";
import { Mascota } from "../models/Mascota.js";

// GET /api/mascotas
export const listarMascotas = async (req, res) => {
  try {
    const { tipo, edadMin, edadMax } = req.query;
    let where = { };
    if (tipo) {
      const tiposValidos = ["perro", "gato"];
      if (!tiposValidos.includes(tipo)) {
        return res
            .status(400)
            .json({ error: "Parámetros de filtro no válidos" });
      }
      where.tipo = tipo;
    }
    let edadMinNum;
    let edadMaxNum;

    if (edadMin !== undefined) {
      edadMinNum = Number(edadMin);
      if (Number.isNaN(edadMinNum)) {
        return res
            .status(400)
            .json({ error: "Parámetros de filtro no válidos" });
      }
    }

    if (edadMax !== undefined) {
      edadMaxNum = Number(edadMax);
      if (Number.isNaN(edadMaxNum)) {
        return res
            .status(400)
            .json({ error: "Parámetros de filtro no válidos" });
      }
    }

    if (edadMinNum !== undefined || edadMaxNum !== undefined) {
      where.edad = {};
      if (edadMinNum !== undefined) where.edad[Op.gte] = edadMinNum;
      if (edadMaxNum !== undefined) where.edad[Op.lte] = edadMaxNum;
    }

    const mascotas = await Mascota.findAll({
      where,
      attributes: ["numeroChip", "nombre", "tipo", "raza", "edad", "pesoKg"],
      order: [["numeroChip", "ASC"]],
    });

    res.json(mascotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo mascotas" });
  }
};

// GET /api/mascotas/:numeroChip
export const obtenerMascota = async (req, res) => {
  try {
    const { numeroChip } = req.params;

    const mascota = await Mascota.findOne({
      where: { numeroChip },
      attributes: ["numeroChip", "nombre", "tipo", "raza", "edad", "pesoKg"],
    });

    if (!mascota) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    res.json(mascota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo mascota" });
  }
};

// POST /api/mascotas
export const crearMascota = async (req, res) => {
  try {

    const { numeroChip, nombre, tipo, raza, edad, pesoKg } = req.body;

    if (!numeroChip || !nombre || !tipo) {
      return res.status(400).json({
        error: "numeroChip, nombre y tipo son obligatorios",
      });
    }

    // Validar tipo
    const tiposValidos = ["perro", "gato"];
    if (!tiposValidos.includes(tipo)) {
      return res
          .status(400)
          .json({ error: "tipo debe ser perro o gato" });
    }

    // Validar numéricos si vienen
    let edadNum = 0;
    if (edad !== undefined) {
      edadNum = Number(edad);
      if (Number.isNaN(edadNum)) {
        return res
            .status(400)
            .json({ error: "edad debe ser un número válido" });
      }
    }

    let pesoKgNum = 0;
    if (pesoKg !== undefined) {
      pesoKgNum = Number(pesoKg);
      if (Number.isNaN(pesoKgNum)) {
        return res
            .status(400)
            .json({ error: "pesoKg debe ser un número válido" });
      }
    }

    await Mascota.create({
      numeroChip,
      nombre,
      tipo,
      raza: raza ?? null,
      edad: edadNum,
      pesoKg: pesoKgNum,
    });

    res.status(201).json({
      numeroChip,
      nombre,
      tipo,
      raza: raza ?? null,
      edad: edadNum,
      pesoKg: pesoKgNum,
    });
  } catch (error) {
    console.error(error);
    if (error.name === "SequelizePrimaryKeyConstraintError") {
      return res
          .status(400)
          .json({ error: "Ya existe una mascota con ese número de chip" });
    }
    res.status(500).json({ error: "Error creando mascota" });
  }
};

// PUT /api/mascotas/:numeroChip
export const actualizarMascota = async (req, res) => {
  try {
    const { numeroChip } = req.params;

    const mascota = await Mascota.findOne({ where: { numeroChip } });

    if (!mascota) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    const { nombre, tipo, raza, edad, pesoKg } = req.body;


    if (!nombre || !tipo) {
      return res.status(400).json({
        error: "nombre y tipo son obligatorios",
      });
    }

    // Validar tipo
    const tiposValidos = ["perro", "gato"];
    if (!tiposValidos.includes(tipo)) {
      return res
          .status(400)
          .json({ error: "tipo debe ser perro o gato" });
    }

    // Validar numéricos (usamos valores actuales como por defecto)
    let edadNum = mascota.edad;
    if (edad !== undefined) {
      edadNum = Number(edad);
      if (Number.isNaN(edadNum)) {
        return res
            .status(400)
            .json({ error: "edad debe ser un número válido" });
      }
    }

    let pesoKgNum = mascota.pesoKg;
    if (pesoKg !== undefined) {
      pesoKgNum = Number(pesoKg);
      if (Number.isNaN(pesoKgNum)) {
        return res
            .status(400)
            .json({ error: "pesoKg debe ser un número válido" });
      }
    }

    await mascota.update({
      nombre,
      tipo,
      raza: raza ?? null,
      edad: edadNum,
      pesoKg: pesoKgNum,
      // numeroChip NO se cambia (es la clave)
    });

    res.json(mascota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error actualizando mascota" });
  }
};

// DELETE /api/mascotas/:numeroChip
export const eliminarMascota = async (req, res) => {
  try {
    const { numeroChip } = req.params;

    const mascota = await Mascota.findOne({ where: { numeroChip } });

    if (!mascota) {
      return res.status(404).json({ error: "Mascota no encontrada" });
    }

    await mascota.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error eliminando mascota" });
  }
};