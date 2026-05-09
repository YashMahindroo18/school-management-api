const SchoolModel = require('../models/schoolModel');
const calculateDistance = require('../utils/haversine');

class SchoolService {
    static async addSchool(data) {
        const { name, address, latitude, longitude } = data;
        return await SchoolModel.addSchool(name, address, latitude, longitude);
    }

    static async getNearestSchools(userLat, userLon) {
        const schools = await SchoolModel.getAllSchools();
        
        // Calculate distance for each school and attach it to the object
        const schoolsWithDistance = schools.map(school => {
            const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
            return { ...school, distance };
        });

        // Sort by nearest distance
        return schoolsWithDistance.sort((a, b) => a.distance - b.distance);
    }
}

module.exports = SchoolService;