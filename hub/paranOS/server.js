
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
const rooms = {};

wss.on("connection", ws => {
 ws.on("message", msg => {
  const data = JSON.parse(msg);
  const { room } = data;
  rooms[room] = rooms[room] || [];
  rooms[room].forEach(c => c.send(JSON.stringify(data)));
  if (!rooms[room].includes(ws)) rooms[room].push(ws);
 });
 ws.on("close",()=>{
  Object.keys(rooms).forEach(r=>{
   rooms[r]=rooms[r].filter(c=>c!==ws);
   if(rooms[r].length===0) delete rooms[r];
  });
 });
});
