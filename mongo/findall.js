/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');

Student.find()
  .then((doc) => {
    console.log('Found documents succesfully: ' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
