const http = require("http");
const fs = require("fs");
const path = require("path");
const { WebSocketServer, WebSocket } = require("ws");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erro ao carregar a página");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
  });
});

const wss = new WebSocketServer({ server });

function broadcast(data) {
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
}

wss.on("connection", (socket) => {
  socket.send(JSON.stringify({
    type: "system",
    text: "Você entrou no chat."
  }));

  socket.on("message", (data) => {
    let message;

    try {
      message = JSON.parse(data.toString());
    } catch {
      socket.send(JSON.stringify({
        type: "error",
        text: "Mensagem inválida."
      }));
      return;
    }

    if (!message.name || !message.text) {
      socket.send(JSON.stringify({
        type: "error",
        text: "Informe nome e mensagem."
      }));
      return;
    }

    const payload = JSON.stringify({
      type: "message",
      name: String(message.name).slice(0, 30),
      text: String(message.text).slice(0, 500),
      sentAt: new Date().toISOString()
    });

    broadcast(payload);
  });
});

server.listen(3000, () => {
    console.log("Servidor em http://localhost:3000");
});