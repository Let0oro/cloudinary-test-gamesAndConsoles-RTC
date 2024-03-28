const UserRoutes = require('./api/routes/user.routes.js')

const { configCloudinary } = require('./middlewares/files.middleware')
configCloudinary();

const express = require('express');
const PORT = 3000;

const connectDB = require('./utils/db.js')
connectDB();

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use('/api/user', UserRoutes);

server.use('*', (res, req, next) => {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
})

server.listen(PORT, () => {
    console.log('server running in https://localhost:'+PORT);
})