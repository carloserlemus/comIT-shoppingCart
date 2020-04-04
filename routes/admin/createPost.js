const adminCreate = (req, res) => {
    console.log("name: ", req.body.Name)
    console.log("description: ", req.body.Description)
    console.log("price: ", req.body.Price)
    console.log("rating: ", req.body.Rating)
    console.log("image: ", req.body.Image)

    //Mongoose implementation
    const mongoose = require('mongoose');
    const uri = "mongodb+srv://kylelemus:Pencil1986!@cerl-newbx.mongodb.net/test?retryWrites=true&w=majority"

    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    // Mongoose Model

    const Product = mongoose.model('Product', {
        name: String,
        desc: String,
        price: Number,
        rating: Number,
        image: String
    })
    const newProduct = {
        name: req.body.Name,
        desc: req.body.Description,
        price: req.body.Price,
        rating: req.body.Rating,
        image: req.body.Image
    }

    const product = new Product(newProduct).save()
    console.log('New Product: ', product)

    res.redirect('/admin')
}

module.exports = adminCreate;