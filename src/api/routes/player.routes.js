const express = require('express');
const { createPlayer, getAllPlayers, getPlayerById, updatePlayerById, deletePlayerById } = require('../controllers/player.controller');
const { playerUpload } = require('../../middlewares/files.middleware');

const playerRoutes = express.Router();

playerRoutes.get('/', getAllPlayers);
playerRoutes.get('/:id', getPlayerById);
playerRoutes.post('/new', playerUpload.single('profilePicture'), createPlayer);
playerRoutes.put('/update/:id', playerUpload.single('profilePicture'), updatePlayerById);
playerRoutes.delete('/delete/:id', deletePlayerById);

module.exports = playerRoutes;
