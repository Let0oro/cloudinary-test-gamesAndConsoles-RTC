const express = require('express');
const { createTeam, getAllTeams, getTeamById, updateTeamById, deleteTeamById } = require('../controllers/team.controller');
const { teamUpload, showImage } = require('../../middlewares/files.middleware');

const teamRoutes = express.Router();

teamRoutes.get('/', getAllTeams);
teamRoutes.get('/:id', getTeamById);
teamRoutes.post('/new', [showImage, teamUpload.single('logo')], createTeam);
teamRoutes.put('/update/:id', teamUpload.single('logo'), updateTeamById);
teamRoutes.delete('/delete/:id', deleteTeamById);

module.exports = teamRoutes;
