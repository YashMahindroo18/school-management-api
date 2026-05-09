const SchoolService = require('../services/schoolService');

class SchoolController {
    static async addSchool(req, res, next) {
        try {
            const id = await SchoolService.addSchool(req.body);
            res.status(201).json({
                success: true,
                message: 'School added successfully',
                data: { id, ...req.body }
            });
        } catch (error) {
            next(error);
        }
    }

    static async listSchools(req, res, next) {
        try {
            const { latitude, longitude } = req.query;
            const nearestSchools = await SchoolService.getNearestSchools(
                parseFloat(latitude), 
                parseFloat(longitude)
            );
            
            res.status(200).json({
                success: true,
                data: nearestSchools
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = SchoolController;