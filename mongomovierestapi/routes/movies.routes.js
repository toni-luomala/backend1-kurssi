// Tietokannan url-reitit

const express = require('express');
const router = express.Router();
const sc = require('../controllers/movies.controller');
const authorize = require('../verifytoken'); // authorisointi eli vahvistetaan token

// Hakee kaikki elokuvat. Reittiä ei ole suojattu auhtorisoinnilla.
// localhost:3000/students/
router.get('/', sc.findAll);

// Poistaa elokuvan id:n perusteella. Reitti on suojattu authorisoinnilla.
// localhost:3000/movies/kopioi tähän elokuvan id
router.delete('/:id', authorize, sc.deleteById);

// Lisää uuden elokuvan. Reitti on suojattu authorisoinnilla.
// localhost:3000/movies/
router.post('/', authorize, sc.addMovie);

// Päivittää elokuvan metascore luvun. Reitti on suojattu authorisoinnilla.
// localhost:3000/movies/updatemovie/title/
router.put('/updatemovie/:name', authorize, sc.updateMetascore);

module.exports = router;
