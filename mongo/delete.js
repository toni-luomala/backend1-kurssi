/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');
// deleteOnen argumentit: olio joka kertoo kohteen ja callback
Student.deleteOne({ stundentcode: 'a1234' }, (err, obj) => {
  if (err) {
    return console.error(err);
  }
  console.log('Document deleted succesfully ' + obj);
});
