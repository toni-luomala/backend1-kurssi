const mongoose = require('mongoose'); // Otetaan mongoose käyttöön muuuttujaan mongoose
const StarsSchema = require('./stars.model');
const DirectorsSchema = require('./directors.model');

/* Elokuvien model tiedosto joka sisältää elokuvan scheman. Schema määrittää minkätyyppistä
tietoa elokuvan avainarvo parit voivat sisältää. */

const MovieSchema = new mongoose.Schema({
  title: { type: String, unique: false, required: true, max: 40 },
  year: { type: Number, unique: false, required: true, min: 1900, max: 2023 }, // elokuva ei voi olla vanhempi kuin vuodelta 1900 eikä uudempi kuin vuodelta 2023
  length: { type: Number, unique: false, required: true, min: 60 },
  language: { type: String, unique: false, required: true },
  imdb_rating: { type: Number, unique: false, required: true },
  metascore: { type: Number, unique: false, required: false, min: 0 },
  stars: { type: [StarsSchema], required: true },
  directors: { type: [DirectorsSchema], required: true }
});

// Tehdään MoviesSchemasta model
const Movie = mongoose.model('Movies', MovieSchema);

module.exports = Movie;
