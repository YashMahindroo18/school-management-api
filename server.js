const app = require('./app');
const db = require('./config/database');
const PORT = process.env.PORT || 3000;

// Test DB Connection and start server
db.getConnection()
    .then(() => {
        console.log('Successfully connected to MySQL database.');
        app.listen(PORT, () => {
            console.log(`Server is running in production mode on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    });