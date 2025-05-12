import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("🏨 RoomQR Backend activo");
});

// Ejemplo: registrar petición
app.post("/requests", async (req, res) => {
  const { room, service } = req.body;
  const nueva = await prisma.request.create({
    data: { room, service },
  });
  res.status(201).json(nueva);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
);
