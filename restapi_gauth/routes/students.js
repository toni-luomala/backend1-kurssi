const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const sc = require('../controllers/studentcontroller');
const authorize = require('../verifytoken'); // authorisointi eli vahvistetaan token

// localhost:3000/students/
router.get('/', sc.findAll);

// localhost:3000/students/63ee27b10c50d4414af6c58d
// kaksoispiste tarkoittaa dynaamista reittiparametria
router.get('/:id', sc.findById);

// localhost:3000/students/scode/x1234
// kaksoispiste tarkoittaa dynaamista reittiparametria
router.get('/scode/:scode', sc.findByScode);

// localhost:3000/students/
router.post('/', authorize, sc.add);

// localhost:3000/students/64059f3960708d426fd6ec74
router.delete('/:id', authorize, sc.deleteById);

// localhost:3000/students/updategrade/a1234/HTS10600
router.put('/updategrade/:scode/:ccode', authorize, sc.updateGrade);

// localhost:3000/students/updatestudent/a1234/
router.put('/updatestudent//:scode', authorize, sc.updateStudent);

// localhost:3000/students/findbycourse/HTS10600
router.get('/findbycourse/:ccode', sc.findByCourse);

// localhost:3000/students/findbystudypoints/100
router.get('/findbystudypoints/:spoints', sc.findByStudypoints);

//localhost:3000/students/addgradeandstudypoints/a1234
router.post(
  '/addgradeandstudypoints/:scode/:spoints',
  authorize,
  sc.addGradeandStudypoints
);

module.exports = router;
