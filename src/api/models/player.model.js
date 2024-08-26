const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        position: { type: String, trim: true, required: true },
        team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
        age: { type: Number, trim: true, required: true },
        jerseyNumber: { type: Number, trim: true, required: true },
        description: { type: String, trim: true, required: true },
        profilePicture: { type: String, trim: true, required: true },
    },
    {
        timestamps: true,
    }
);

const Player = mongoose.model('Player', playerSchema, 'players');
module.exports = Player;
