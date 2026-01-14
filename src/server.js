import app from "./app.js";
import { db } from "./models/index.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await db.authenticate();
    console.log("Banco conectado");

    await db.sync();
    console.log("Tabelas verificadas/criadas com sucesso");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar com banco de dados", error);
    process.exit(1);
  }
};

startServer();
