const moongose = require('mongoose');

const Schema = moongose.Schema;

const consoleSchema = new Schema(
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

const Console = moongose.model('Console', consoleSchema, 'consoles');
module.exports = Console;