const express = require('express');
const { configCloudinary } = require('./middlewares/files.middleware');
const teamRoutes = require('./api/routes/team.routes');
const playerRoutes = require('./api/routes/player.routes');
const connectDB = require('./utils/db.js');
require('dotenv').config();

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(express.urlencoded({extended: false}));

connectDB();

configCloudinary();

server.use('/api/teams', teamRoutes);
server.use('/api/players', playerRoutes);

server.use('*', (res, req, next) => {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
})

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
