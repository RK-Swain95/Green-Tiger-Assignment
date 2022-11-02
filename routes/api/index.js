const express=require('express');
const router=express.Router();
const studentcontrolller=require('../../controllers/student_controller');
//for creating student
router.post("/create",studentcontrolller.create);

//finding all students
router.get('/findallstudents',studentcontrolller.allstudents);

//Read student by ID 
router.get('/findbyId/:id',studentcontrolller.readbystudentId);

//Edit/Update student by ID
router.post('/updatebyId/:id',studentcontrolller.updatebyId); 

//Deleting
router.get("/deleting/:id",studentcontrolller.deletebyId);


module.exports=router;