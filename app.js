const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff.js')


mongoose.connect('mongodb+srv://Admin:nI2FvrV8Ud4qoGyz@cluster0.evt76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);

module.exports = app;