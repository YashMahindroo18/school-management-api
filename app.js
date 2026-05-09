const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const schoolRoutes = require('./routes/schoolRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api', schoolRoutes);

// Centralized Error Handling
app.use(errorHandler);
// Health Check Route
app.get('/', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: 'Welcome to the School Management API! System is fully operational.' 
    });
});
module.exports = app;
