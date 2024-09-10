const Team = require('../models/team.model');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');

async function createTeam(req, res, next) {

    console.log("controller")
    console.log(req.body)
    console.log(req.file)
    try {
        const team = new Team({
            ...req.body,
            logo: req.file ? req.file.path : 'no image',
        });
        const teamDB = await team.save();
        res.status(201).json(teamDB);
    } catch (error) {
        return next(error);
    }
}

async function getAllTeams(req, res, next) {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        return next(error);
    }
}

async function getTeamById(req, res, next) {
    try {
        const { id } = req.params;
        const team = await Team.findById(id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        return next(error);
    }
}

async function updateTeamById(req, res, next) {
    try {
        const { id } = req.params;
        const oldTeam = Team.findById(id).select("logo")
        if (oldTeam.logo && (req.file || req.file.path)) {
            deleteImgCloudinary(oldTeam.logo);
        }
        const updatedTeam = await Team.findByIdAndUpdate(
            id,
            { ...req.body, logo: req.file ? req.file.path : 'no image' },
            { new: true }
        );
        res.status(200).json(updatedTeam);
    } catch (error) {
        return next(error);
    }
}

async function deleteTeamById(req, res, next) {
    try {
        const { id } = req.params;
        const team = await Team.findByIdAndDelete(id);
        if (team.logo) deleteImgCloudinary(team.logo);
        res.status(200).json(team);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    updateTeamById,
    deleteTeamById
};
