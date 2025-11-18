// models/Mascota.js
import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Mascota = sequelize.define(
  "Mascota",
  {
    numeroChip: {
      type: DataTypes.STRING,
      primaryKey: true,   // clave principal
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      // Ej: 'perro', 'gato'
      type: DataTypes.ENUM("perro", "gato"),
      allowNull: false,
    },
    raza: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pesoKg: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "mascotas",
    timestamps: false,
  }
);