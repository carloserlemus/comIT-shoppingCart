const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ======= MIDDLEWARES ========
app.set('view engine', 'pug')
app.use(express.static('public'))

// ========== MODULES ==========

const home = require('./routes/home')
const categories = require('./routes/categories')
const adminIndex = require('./routes/admin/index')
const adminCreate = require('./routes/admin/create')

app.get('/', home)
app.get('/categories', categories)
app.get('/admin/', adminIndex)
app.get('/admin/create', adminCreate)
// ==========================

app.listen(port, (err) => {
    if (err){
        console.log('Error connecting to: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})