const express = require('express');
const cors = require('cors');


module.exports = (app) => {
    app.use(cors());
    app.use(express.json({ limit: '200mb' }));
    app.use(express.urlencoded({ limit: '200mb', extended: true }));
    app.use(express.static('public'));
    
}