/*
käytä findOneAndUpdate -metodia
argumentit: 1) kohde jota päivitetään (studentcode ja grades.coursecode)
eli pitää löytää opiskelija ja kurssi jota päivitetään
2) {'grades.$.grade': 5} eli grades -alidokumenttiin jonka
sijainti määritettiin edellisellä argumentilla, laitetaan
grade-arvoksi 5.
*/

/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');

// Päivittää kurssin arvosanan
Student.updateOne(
  // eslint-disable-next-line quote-props
  { studentcode: 'a1234', 'grades.coursecode': 'HTS10600' },
  { $set: { 'grades.$.grade': 5 } }
)
  .then((doc) => {
    console.log('Updated documents succesfully: ' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
