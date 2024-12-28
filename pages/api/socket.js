import { v4 as uuidv4 } from 'uuid';

// Ensure ws is only used server-side
let WebSocket;

if (typeof window === 'undefined') {
  WebSocket = require('ws');  // Only import `ws` on the server-side
}

let rooms = {};

const handler = (req, res) => {
  if (req.method === 'GET') {
    // Handle WebSocket connection in the GET request
    if (res.socket.server.wss) {
      console.log('WebSocket server already running');
      return res.status(200).json({ message: 'WebSocket server is running' });
    }

    // Create WebSocket server
    const wss = new WebSocket.Server({ noServer: true });

    // Attach WebSocket server to the HTTP server
    res.socket.server.on('upgrade', (request, socket, head) => {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });

    // WebSocket connection logic
    wss.on('connection', (ws) => {
      console.log('New WebSocket connection');
      let currentRoomId = null;

      ws.on('message', (message) => {
        try {
          const data = JSON.parse(message);
          const { roomId, type, payload } = data;

          if (!rooms[roomId]) {
            rooms[roomId] = [];
          }

          if (!currentRoomId) {
            currentRoomId = roomId;
            rooms[roomId].push(ws);
            console.log(`User joined room: ${roomId}`);
          }

          if (type === 'leave') {
            // Remove the user from the room and notify others
            rooms[roomId] = rooms[roomId].filter((client) => client !== ws);
            console.log(`User left room: ${roomId}`);
            rooms[roomId].forEach((client) => {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                  type: 'user-left',
                  payload: { roomId },
                }));
              }
            });
          } else if (type === 'chat') {
            // Broadcast the chat message to all clients in the room
            rooms[roomId].forEach((client) => {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'chat', payload: { message: payload.message } }));
              }
            });
          } else {
            // Handle other types like 'offer', 'answer', 'candidate'
            rooms[roomId].forEach((client) => {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type, payload }));
              }
            });
          }
        } catch (error) {
          console.error('Error handling WebSocket message:', error);
        }
      });

      ws.on('close', () => {
        console.log('WebSocket connection closed');
        if (currentRoomId && rooms[currentRoomId]) {
          rooms[currentRoomId] = rooms[currentRoomId].filter((client) => client !== ws);

          if (rooms[currentRoomId].length === 0) {
            delete rooms[currentRoomId];
            console.log(`Room ${currentRoomId} deleted`);
          }
        }
      });
    });

    // Store WebSocket server on the socket server
    res.socket.server.wss = wss;

    return res.status(200).json({ message: 'WebSocket server started' });
  }

  // Default response for non-GET requests
  res.status(405).json({ message: 'Method Not Allowed' });
};

export default handler;
