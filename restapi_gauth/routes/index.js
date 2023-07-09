/* eslint-disable new-cap */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

// etusivu
router.get('/', function (req, res) {
  res.render('index.ejs');
});

// profiilisivu suojattu isLoggedIn -funktiolla joka on tässä tiedostossa alinna
router.get('/profile', isLoggedIn, function (req, res) {
  console.log(req.isAuthenticated()); // Passportin metodi joka tuottaa true jos Google auth onnistui
  // user saadaan Googlelle tehdyn pyynnön tuloksena req-oliossa
  // Se sisältää käyttäjän profiilin kts. konsolista
  console.log(req.user);

  // Tässä luodaan Googlelta saadusta datasta uusi JWT-token, jolla voidaan
  // päästä käsiksi muokkausreitteihin. JWT-token voidaan myös välittää
  // frontendin sessionstorageen ja käyttää siellä pääsynvalvontaan
  const payload = {
    email: req.user.google.email
  };

  console.log(payload);
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 // expiroituu 24 tunnissa
  });

  sess = req.session; //laitetaan sessio-olio muuttujaan sess
  res.render('profile.ejs', {
    user: req.user, // user req-oliosta templaattiin
    sessid: sess.id, // viedään session id templaattiin
    jwttoken: token
  });
});

/*
Googlen autentikaatioreitti
scope kuvaa Googlelta saatavaa dataa
profiilitiedot, ja email
*/
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/*
callback -osoite jonne ohjataan Google-autentikaation jälkeen
tässä tapauksessa callback-osoitteesta mennään suoraan profile-sivulle
jossa näytetään profiilitiedot
*/
router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
  })
);

//logout
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// middleware jota käytetään autentikoitavissa reiteissä (tässä /profile -reitti)
function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated()); // tuottaa true jos Google auth onnistui
  // jos käyttäjä autentikoitunut, mennään eteenpäin
  if (req.isAuthenticated()) {
    return next(); // mennään isLoggedIn -funktiosta seuraavaan funktioon
  }
  // muuten mennään etusivulle
  res.redirect('/');
}

module.exports = router;
