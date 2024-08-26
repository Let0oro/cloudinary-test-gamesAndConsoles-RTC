const Player = require('../models/player.model');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');

async function createPlayer(req, res, next) {
    try {
        const player = new Player({
            ...req.body,
            profilePicture: req.file ? req.file.path : 'no image',
        });
        const playerDB = await player.save();
        res.status(201).json(playerDB);
    } catch (error) {
        return next(error);
    }
}

async function getAllPlayers(req, res, next) {
    try {
        const players = await Player.find().populate('team');
        res.status(200).json(players);
    } catch (error) {
        return next(error);
    }
}

async function getPlayerById(req, res, next) {
    try {
        const { id } = req.params;
        const player = await Player.findById(id).populate('team');
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (error) {
        return next(error);
    }
}

async function updatePlayerById(req, res, next) {
    try {
        const { id } = req.params;
        const updatedPlayer = await Player.findByIdAndUpdate(
            id,
            { ...req.body, profilePicture: req.file ? req.file.path : 'no image' },
            { new: true }
        );
        res.status(200).json(updatedPlayer);
    } catch (error) {
        return next(error);
    }
}

async function deletePlayerById(req, res, next) {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndDelete(id);
        if (player.profilePicture) deleteImgCloudinary(player.profilePicture);
        res.status(200).json(player);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayerById,
    deletePlayerById
};
