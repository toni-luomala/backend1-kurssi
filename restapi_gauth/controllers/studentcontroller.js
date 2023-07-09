/*
Kontrolleri on olio, joka sisältää metodeja. Se tehty siksi, että
saadaan erotettua reitit ja tietokantahakujen sovelluslogiikka toisistaan.
Se on siis arkkitehtuuriratkaisu. Eli saamme aikaan järkevämmän arkkitehtuurin
kun jaamme eri asioita tekevän koodin eri tiedostoihin ja kansioihin.
*/

const Student = require('../models/Student'); // haetaan model

// Tietokannan käsittelymetodit tehdään olion sisään
// metodin nimi on avain ja sen runko on arvo
const StudentController = {
  // 1) Kaikkien opiskelijoiden haku
  /* findAll -metodi hakee kaikki opiskelijat
  Student-modelin find-metodilla */
  findAll: (req, res) => {
    Student.find((error, students) => {
      if (error) {
        throw error;
      }
      res.json(students);
    });
  },
  // 2) Yhden opiskelijan haku id:n perusteella.
  findById: (req, res) => {
    Student.findOne({ _id: req.params.id }, (error, student) => {
      if (error) {
        throw error;
      }
      res.json(student);
    });
  },
  //Mongoose-kantaoperaatio tänne
  //jne...
  // 3) Yhden opiskelijan haku opiskelijanumeron perusteella.
  findByScode: (req, res) => {
    Student.findOne({ studentcode: req.params.scode }, (error, student) => {
      if (error) {
        throw error;
      }
      res.json(student);
    });
  },
  // 4) Opiskelijan lisäys
  add: (req, res) => {
    /*
    Valitse postmanissa raw, body ja JSON-muoto.
    */
    // eslint-disable-next-line new-cap
    const newStudent = Student(req.body);
    Student.create(newStudent)
      .then((student) => {
        console.log('Document inserterd succesfully: ' + doc);
        res.json(student);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  // 5) Yhden opiskelijan poisto id:n perusteella.
  deleteById: (req, res) => {
    Student.findOneAndDelete({ _id: req.params.id }, (error, student) => {
      if (error) {
        throw error;
      }
      console.log('student deleted');
      res.json(student);
    });
  },

  // 6) Opiskelijan muokkaus.
  updateStudent: (req, res) => {
    // Argumentit ovat päivityksen kohde ja sen suoritus
    Student.findOneAndUpdate(
      { studentcode: req.params.scode },
      { $set: { name: req.body.grade } }
    )
      .then((result) => {
        console.log('Document updated succesfully: ' + result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // 7) Niiden opiskelijoiden haku joilla on opintopisteitä alle url-osoitteessa lähetetyn arvon.
  findByStudypoints: (req, res) => {
    Student.find(
      { studypoints: { $lt: req.params.spoints } },
      (error, student) => {
        if (error) {
          throw error;
        }
        res.json(student);
      }
    );
  },

  // 8) Uuden arvosanan lisäys opiskelijalle ja samalla opintopisteiden lisäys
  addGradeandStudypoints: (req, res) => {
    Student.updateOne(
      // eslint-disable-next-line quote-props
      { studentcode: req.params.scode },
      {
        $inc: { studypoints: 5 },
        $push: { grades: { coursecode: req.body.ccode, grade: req.body.grade } }
      }
    )
      .then((result) => {
        console.log('Document updated succesfully: ' + result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // 9) Arvosanan muokkaus. Muokkaus tarkoittaa aina sitä, että
  // olemassa olevan tiedon päälle laitetaan uutta tietoa.
  // Valitaan opiskelija arvosana opiskelijanumeron ja
  // kurssitunnuksen perusteella ja päivitetään sitä
  updateGrade: (req, res) => {
    // Argumentit ovat päivityksen kohde ja sen suoritus
    Student.findOneAndUpdate(
      // eslint-disable-next-line quote-props
      { studentcode: req.params.scode, 'grades.coursecode': req.params.ccode },
      { $set: { 'grades.$.grade': req.body.grade } }
    )
      .then((result) => {
        console.log('Document updated succesfully: ' + result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // 10) Niiden opiskelijoiden haku joilla on tietty kurssi
  findByCourse: (req, res) => {
    Student.find({
      grades: { $elemMatch: { coursecode: req.body.coursecode } }
    })
      .then((result) => {
        console.log('Documents found succesfully: ' + result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

module.exports = StudentController;

/*
students.js -reittitiedostossa kontrollerin metodia kutsutaan tällä tavalla:

router.get('/', StudentController.findAll);

jolloin kaikki opiskelijat saadaan JSON-muodossa osoitteesta http://localhost:3000/students/

*/
