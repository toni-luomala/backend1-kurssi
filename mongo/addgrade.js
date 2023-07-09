/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');

/*
// argumentit: kohde (studentcode), toimenpiteet, (callback jos käytämme sitä)
Student.updateOne()

Toimenpiteet: {$push: {grades: newgrade}, $inc: {studypoints: 5}}

*/

// Lisää uuden arvosanan opiskelijalle ja lisää opintopisteitä 5:llä opintopisteellä.

Student.updateOne(
  { studentcode: 'a1234' },
  {
    $inc: { studypoints: 5 },
    $push: {
      grades: { coursecode: 'hts10700', grade: 5 }
    }
  }
)
  .then((doc) => {
    console.log('Updated documents succesfully: ' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
