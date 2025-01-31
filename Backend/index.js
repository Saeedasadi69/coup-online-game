require('dotenv').config(); 

import express, { json } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db';
import gameRoutes from './routes/gameRoutes';
require('dotenv').config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Middleware
app.use(json());

// Routes
app.use('/api/game', gameRoutes);

// Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Connect to MongoDB
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});