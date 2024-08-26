const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        coach: { type: String, trim: true, required: true },
        foundedYear: { type: Number, trim: true, required: true },
        description: { type: String, trim: true, required: true },
        logo: { type: String, trim: true, required: true },
        category: { type: String, trim: true, required: true }
    },
    {
        timestamps: true,
    }
);

const Team = mongoose.model('Team', teamSchema, 'teams');
module.exports = Team;
