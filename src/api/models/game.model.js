const moongose = require('mongoose');

const Schema = moongose.Schema;

const gameSchema = new Schema(
    {
        title: { type: String, trim: true, required: true },
        developer: { type: String, trim: true, required: true },
        price: { type: Number, trim: true, required: true },
        year: { type: Number, trim: true, required: true },
        description: { type: String, trim: true, required: true },
        frontFace: { type: String, trim: true, required: true },
        category: { type: String, trim: true, required: true }
    },
    {
        timestamps: true,
    }
);

const Game = moongose.model('Movie', gameSchema, 'games');
module.exports = Game;