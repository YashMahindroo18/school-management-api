const db = require('../config/database');

class SchoolModel {
    static async addSchool(name, address, latitude, longitude) {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(query, [name, address, latitude, longitude]);
        return result.insertId;
    }

    static async getAllSchools() {
        const query = 'SELECT * FROM schools';
        const [rows] = await db.execute(query);
        return rows;
    }
}

module.exports = SchoolModel;