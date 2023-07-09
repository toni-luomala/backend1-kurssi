const mongoose = require('mongoose'); // Otetaan mongoose käyttöön muuuttujaan mongoose

/* Model on malli tietokannasta. Ohjaajien model tiedosto joka sisältää ohjaajien scheman.
Schema määrittää minkätyyppistä tietoa elokuvan avainarvo parit voivat sisältää. */

const DirectorsSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 50 },
  gender: { type: String, required: true, max: 6 }
});

module.exports = DirectorsSchema;
