const mongoose = require('mongoose'); // Otetaan mongoose käyttöön muuuttujaan mongoose

/* Model on malli tietokannasta. Elokuvien model tiedosto joka sisältää näyttelijöiden scheman.
Schema määrittää minkätyyppistä tietoa elokuvan avainarvo parit voivat sisältää. */

const StarsSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 50 },
  gender: { type: String, required: true, max: 6 }
});

module.exports = StarsSchema;
