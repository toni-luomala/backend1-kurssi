/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');
const newStudentObject = require('./NewStudentObject');

// Tee create samalla tavalla kuin mongoose-esimerkissä
const newStudent = Student(newStudentObject);

// Hae tähän lisättävä olio. create palauttaa promisen joka käsitellään
// homman voisi tehdä myös ilman promisea callbackilla
Student.create(newStudent)
  .then((doc) => {
    console.log('Document inserterd succesfully: ' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
