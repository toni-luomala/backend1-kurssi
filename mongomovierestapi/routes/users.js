const express = require('express');
const router = express.Router();

const uc = require('../controllers/users.controller'); // user-reittien kontrolleri

// rekisteröityminen eli luodaan uudet tunnukset
// http://localhost:3000/users/register
router.post('/register', uc.registerUser);
// kirjautuminen eli autentikaatio luoduilla tunnuksilla
router.post('/login', uc.authenticateUser);

module.exports = router;
