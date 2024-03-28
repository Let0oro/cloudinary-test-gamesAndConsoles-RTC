const Console = require('../models/console.model');
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

async function createConsole(req, res, next) {
    try {
        const console = new Console({
            ...req.body,
            img: req.file ? req.file.path : 'not image',
        })
        const consoleDB = await console.save()
        res.status(201).json(consoleDB)
    } catch (error) {
        return next(error)
    }
}

async function updateConsoleById(req, res, next) {
    try {
        const { id } = req.params
        const updateConsole = await Console.findByIdAndUpdate(
            id,
            { ...req.body, img: req.file ? req.file.path : 'not image' },
            {
                new: true,
            }
        )
        res.status(200).json(updateConsole)
    } catch (error) {
        return next(error)
    }
}

async function deleteConsoleById(req, res, next) {
    try {
        const { id } = req.params
        const console = await Console.findByIdAndDelete(id)
        if (console.img) deleteImgCloudinary(console.img)
        res.status(200).json(console)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    createConsole,
    updateConsoleById,
    deleteConsoleById
}