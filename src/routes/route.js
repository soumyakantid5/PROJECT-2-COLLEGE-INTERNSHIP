const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeControllers");
const internControllers = require("../controllers/internControllers");

//POST APIS TO CREATE COLLEGE AND INTERNS
router.post("/colleges", collegeController.createCollege);
router.post("/interns", internControllers.createInterns);

//GET API TO FETCH THE COLLEGE DETAILS
router.get("/collegeDetails", collegeController.getCollege);

module.exports = router;
