/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');

// Päivittää opiskelijan opintopisteitä +5:llä opintopisteellä.
Student.updateOne({ studentcode: 'h1234' }, { $inc: { studypoints: 5 } })
  .then((doc) => {
    console.log('Found documents succesfully: ' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
