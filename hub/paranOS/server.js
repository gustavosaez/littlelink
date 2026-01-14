
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
const rooms = {};

wss.on("connection", ws => {

  ws.on("message", msg => {
    let data;
    try { data = JSON.parse(msg); } catch { return; }

    const { room, type } = data;
    if (!room) return;

    rooms[room] = rooms[room] || [];

    // join room
    if (!rooms[room].includes(ws)) {
      if (rooms[room].length >= 2) {
        ws.send(JSON.stringify({ type: "full" }));
        return;
      }
      rooms[room].push(ws);
    }

    // broadcast signaling to the other peer
    rooms[room].forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on("close", () => {
    Object.keys(rooms).forEach(room => {
      rooms[room] = rooms[room].filter(c => c !== ws);
      if (rooms[room].length === 0) delete rooms[room];
    });
  });
});

console.log("ParanOS signaling server running on ws://localhost:8080");
