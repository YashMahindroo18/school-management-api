const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        const connection = await db.getConnection();

        console.log('Successfully connected to MySQL database.');

        connection.release();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('FULL DATABASE ERROR:', error);

        process.exit(1);
    }
})();