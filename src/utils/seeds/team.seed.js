const mongoose = require("mongoose");
const teams = require("../../api/data/teams");
require("dotenv").config();
const Team = require("../../api/models/team.model");

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allTeams = await Team.find();

    if (allTeams.length) {
      await Team.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Team.insertMany(teams);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
