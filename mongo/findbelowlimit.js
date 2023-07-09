/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');

// Hakee opiskelijat joilla on alle 100 opintopistettä
Student.find({ studypoints: { $lt: 100 } })
  .then((doc) => {
    console.log('Found documents succesfully: ' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
