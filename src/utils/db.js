const mongoose = require('mongoose');
const generateSeed = require("../api/seeds/team.seed");

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Succesfully connected to DB');
        generateSeed();
    } catch (err) {
        console.log('An error occurred while connecting to DB: '+ err);
    }
}

module.exports = connectDB;