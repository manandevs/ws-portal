import * as WebSocket from "ws";

const PORT = 8080;

const wss = new WebSocket.WebSocketServer({ port: PORT });

wss.on("connection", (socket, request) => {
    const ip = request.socket.remoteAddress;

    console.log(`Client connected: ${ip}`);

    socket.on("message", (rawData) => {
        const message = rawData.toString();

        console.log(`Received: ${message}`, rawData);

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Server Broadcast: ${message}`);
            }
        });
    });

    socket.on("error", (err) => {
        console.error(`Error: ${err.message} : ${ip}`);
    });

    socket.on("close", () => {
        console.log(`Client disconnected: ${ip}`);
    });
});

console.log(`Server is running on ws://localhost:${PORT}`);