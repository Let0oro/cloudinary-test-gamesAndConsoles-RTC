const express = require('express');
const { createPlayer, getAllPlayers, getPlayerById, updatePlayerById, deletePlayerById } = require('../controllers/player.controller');
const { playerUpload } = require('../../middlewares/files.middleware');

const playerRoutes = express.Router();

playerRoutes.get('/players', getAllPlayers);
playerRoutes.get('/players/:id', getPlayerById);
playerRoutes.post('/players/new', playerUpload.single('profilePicture'), createPlayer);
playerRoutes.put('/players/update/:id', playerUpload.single('profilePicture'), updatePlayerById);
playerRoutes.delete('/players/delete/:id', deletePlayerById);

module.exports = playerRoutes;
