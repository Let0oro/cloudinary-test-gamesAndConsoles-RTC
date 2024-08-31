const express = require('express');
const { createTeam, getAllTeams, getTeamById, updateTeamById, deleteTeamById } = require('../controllers/team.controller');
const { teamUpload, showImage } = require('../../middlewares/files.middleware');

const teamRoutes = express.Router();

teamRoutes.get('/teams', getAllTeams);
teamRoutes.get('/teams/:id', getTeamById);
teamRoutes.post('/teams/new', [showImage, teamUpload.single('logo')], createTeam);
teamRoutes.put('/teams/update/:id', teamUpload.single('logo'), updateTeamById);
teamRoutes.delete('/teams/delete/:id', deleteTeamById);

module.exports = teamRoutes;
