// index.js
import express from "express";
import cors from "cors";
import { sequelize } from "./db.js";
import mascotaRoutes from "./routes/mascotaRoutes.js";
import seed from "./seed.js";

const app = express();
const PUERTO = 3000;

// Then pass these options to cors:
app.use(cors( {
  origin: '*',
  
}));
app.use(express.json());


async function iniciarBD() {
  try {
    await sequelize.authenticate();
    console.log("Conexión con SQLite OK ✅");
    await sequelize.sync();
    console.log("Modelos sincronizados ✅");
  } catch (error) {
    console.error("Error conectando con la BD:", error);
  }
}

app.get("/", (req, res) => {
  res.send("API's creadas para examen DAM2-DI'");
});

// Prefijo común para la API
app.use("/api", mascotaRoutes);



app.listen(PUERTO, async () => {
  await iniciarBD();
  await seed();
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});




