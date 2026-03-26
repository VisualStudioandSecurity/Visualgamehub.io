const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const API_KEY = '0b9d369ff03b4011a6666e50bcba32ad';

app.get("/", (req, res) => res.send("Terminal de Segurança Kovaliosky: Online"));

// Rota de Notícias com busca profunda (Everything)
app.get("/news", async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                // Foca nos seus domínios de Senior Developer e Trader
                q: 'cybersecurity OR bitcoin OR cibersegurança', 
                language: 'pt',
                sortBy: 'publishedAt',
                pageSize: 10,
                apiKey: API_KEY
            },
            timeout: 5000,
            headers: { 'User-Agent': 'KovalioskyDev-Security-App/1.0' }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error("Erro na API:", error.message);
        res.status(500).json({ error: "Falha na extração de dados de inteligência" });
    }
});

server.listen(3000, () => {
    console.log("🚀 [SYSTEM] Servidor rodando em http://localhost:3000");
    console.log("📂 [PATH] Rota de inteligência pronta: http://localhost:3000/news");
});