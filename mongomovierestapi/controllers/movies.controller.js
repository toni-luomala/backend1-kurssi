// Tuodaan modelit muuttujaan Movies
const Movies = require('../models/movies.model');

const MoviesController = {
  findAll: (req, res) => {
    Movies.find((error, movies) => {
      if (error) {
        throw error;
      }
      res.json(movies);
    });
  },

  // Elokuvan poisto id:n perusteella.
  deleteById: (req, res) => {
    Movies.deleteOne({ _id: req.params.id }, (error, movies) => {
      if (error) {
        throw error;
      }
      console.log('movie deleted');
      res.json(movies);
    });
  },

  // Elokuvan lisäys.
  addMovie: (req, res) => {
    // Määritetään muuttujaan uusi elokuva ja sijoitetaan sinne bodysta elokuvan tiedot
    const newMovie = Movies(req.body);
    Movies.create(newMovie)
      .then((doc) => {
        console.log('Document inserted succesfully: ' + doc);
        res.json(doc);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // Päivittää elokuvan metascoren
  updateMetascore: (req, res) => {
    // Määritetään päivitettävä elokuva nimen perusteella, joka tulee url-osoitteeseen
    // määritellään päivitettävä toimenpide eli set ja kohteena metascore
    Movies.findOneAndUpdate(
      { title: req.params.name },
      { $set: { metascore: req.body.metascore } }
    )
      .then((result) => {
        console.log('Document updated succesfully: ' + result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
module.exports = MoviesController;
