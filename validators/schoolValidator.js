const { body, query } = require('express-validator');

const validateAddSchool = [
    body('name').notEmpty().withMessage('School name is required').isString(),
    body('address').notEmpty().withMessage('Address is required').isString(),
    body('latitude').isFloat({ min: -90, max: 90 }).withMessage('Valid latitude is required'),
    body('longitude').isFloat({ min: -180, max: 180 }).withMessage('Valid longitude is required')
];

const validateListSchools = [
    query('latitude').isFloat({ min: -90, max: 90 }).withMessage('Valid latitude is required'),
    query('longitude').isFloat({ min: -180, max: 180 }).withMessage('Valid longitude is required')
];

module.exports = { validateAddSchool, validateListSchools };