// Ensure dotenv is properly configured at the absolute top
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');


// Note: requiring the routes effectively requires database.js, 
// which triggers the new initialization logic automatically!

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const reportRoutes = require('./routes/reportRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const salaryRoutes  = require('./routes/salaryRoutes');


const app = express();

// Middleware Configuration
app.use(cors());
app.use(express.json()); // Parses incoming JSON
app.use(express.urlencoded({ extended: true }));

// Serve Static Assets Native Configs
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route Configurations

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/invoice', invoiceRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/salary',   salaryRoutes);


// Base route for health checking
app.get('/', (req, res) => {
    res.json({ success: true, message: 'Engineering ERP Backend is running smoothly', timestamp: new Date().toISOString() });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('[UNCAUGHT SERVER ERROR]', err.stack || err.message);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

// Set Port and start Express
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`[SERVER SUCCESS] Server is gracefully running on port ${PORT}`);
});
