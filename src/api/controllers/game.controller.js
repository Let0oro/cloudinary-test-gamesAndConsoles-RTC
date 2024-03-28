const Game = require('../models/game.model');
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

async function createGame(req, res, next) {
    try {
        const game = new Game({
            ...req.body,
            img: req.file ? req.file.path : 'not image',
        })
        const gameDB = await game.save()
        res.status(201).json(gameDB)
    } catch (error) {
        return next(error)
    }
}

async function updateGameById(req, res, next) {
    try {
        const { id } = req.params
        const updateGame = await Game.findByIdAndUpdate(
            id,
            { ...req.body, img: req.file ? req.file.path : 'not image' },
            {
                new: true,
            }
        )
        res.status(200).json(updateGame)
    } catch (error) {
        return next(error)
    }
}

async function deleteGameById(req, res, next) {
    try {
        const { id } = req.params
        const game = await Game.findByIdAndDelete(id)
        if (game.img) deleteImgCloudinary(game.img)
        res.status(200).json(game)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    createGame,
    updateGameById,
    deleteGameById
}