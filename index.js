const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ======= MIDDLEWARES ========
app.set('view engine', 'pug')
app.use(express.static('public'))

// ========== MODULES ==========
// ==== ENTRY POINT MODULE ====

const entry_point = require('./routes/entry-point')

app.get('/', entry_point)

// ==========================

app.listen(port, (err) => {
    if (err){
        console.log('Error connecting to: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})