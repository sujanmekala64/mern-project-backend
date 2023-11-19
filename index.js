const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection string
const mongoDBUri = 'mongodb+srv://sujanmekala64:12345@cluster0.rn4vzp0.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    // Your server setup or other initialization code can go here
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
