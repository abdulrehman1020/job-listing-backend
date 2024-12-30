import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on('testEvent', (data) => {
        console.log(`Received testEvent with data: ${data}`);
    });

    socket.emit('welcome', { message: 'Welcome to the Socket.IO server!' });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
