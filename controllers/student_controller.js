const Student = require("../models/student");

//for creating student
module.exports.create = async function (req, res) {
  try {
    let data = await Student.findOne({ name: req.body.name });
    if (!data) {
      let student = await Student.create(req.body);
      return res.json(200, {
        message: "student created  successfully",
        student: student,
      });
    } else {
      return res.json(200, {
        message: "student present  already",
        student: data,
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "error in creating student !!",
    });
  }
};

//all students
module.exports.allstudents = async function (req, res) {
  try {
    let data = await Student.find({});
    if (data) {
      return res.json(200, {
        message: "student found !!",
        student: data,
      });
    } else {
      return res.json(200, {
        message: " no student found !!",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "error in finding all student !!",
    });
  }
};

//read by student id

module.exports.readbystudentId = async function (req, res) {
  try {
    let student = await Student.findOne({ _id: req.params.id });

    if (student) {
      return res.json(200, {
        message: "student found by Id !!",
        student: student,
      });
    } else {
      return res.json(200, {
        message: " no student found !!",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "error in finding student by Id !!",
    });
  }
};

//Edit/Update student by ID

module.exports.updatebyId = async function (req, res) {
  try {
    let student = await Student.findOne({ _id: req.params.id });
    //console.log(student);
    if (student) {
      let updatedstudent = await Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        Dept: req.body.Dept,
        Date_of_joining: req.body.Date_of_joining,
      });
      updatedstudent.save();
      let data = await Student.findOne({ _id: req.params.id });

      return res.json(200, {
        message: "student updated by Id !!",
        student: data,
      });
    } else {
      return res.json(200, {
        message: " no student found !!",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "error in updating student by Id !!",
    });
  }
};

//Delete student ID

module.exports.deletebyId = async function (req, res) {
  try {
    let student = await Student.findByIdAndDelete({ _id: req.params.id });
    if (student) {
      return res.json(200, {
        message: "student deleted by Id !!",
        student: student,
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "error in deleting student by Id !!",
    });
  }
};
