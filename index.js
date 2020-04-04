const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = process.env.PORT || 8000;

// ======= MIDDLEWARES ========
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// ========== MODULES ==========
const home = require('./routes/home')
const categories = require('./routes/categories')
const adminIndex = require('./routes/admin/index')
const adminCreate = require('./routes/admin/create')
const adminCreatePost = require('./routes/admin/createPost')
const adminDelete = require('./routes/admin/delete')
const adminUpdate = require('./routes/admin/update')

// ===== ROUTES =====
app.get('/', home)
app.get('/categories', categories)
app.get('/admin/', adminIndex)
app.get('/admin/create', adminCreate)
app.post('/admin/create', adminCreatePost)
app.get('/admin/update', adminUpdate)
app.get('/admin/delete', adminDelete)

app.listen(port, (err) => {
    if (err){
        console.log('Error connecting to: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})