const express = require('express');
const router = express.Router();
const SchoolController = require('../controllers/schoolController');
const { validateAddSchool, validateListSchools } = require('../validators/schoolValidator');
const validateRequest = require('../middlewares/validateRequest');

router.post('/addSchool', validateAddSchool, validateRequest, SchoolController.addSchool);
router.get('/listSchools', validateListSchools, validateRequest, SchoolController.listSchools);

module.exports = router;