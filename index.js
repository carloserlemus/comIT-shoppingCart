const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ======= MIDDLEWARES ========
app.set('view engine', 'pug')
app.use(express.static('public'))

// ========== MODULES ==========

const entry_point = require('./routes/entry-point')
const categories = require('./routes/categories')

app.get('/', entry_point)
app.get('/categories', categories)

// ==========================

app.listen(port, (err) => {
    if (err){
        console.log('Error connecting to: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})