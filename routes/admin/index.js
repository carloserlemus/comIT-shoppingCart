const admin = async (req, res) => {
    // //Mongoose implementation
    // const mongoose = require('mongoose');
    // const uri = "mongodb+srv://kylelemus:Pencil1986!@cerl-newbx.mongodb.net/test?retryWrites=true&w=majority"

    // mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    // // Mongoose Model

    // const Product = mongoose.model('Product', {
    //     name: String,
    //     desc: String,
    //     price: Number,
    //     rating: Number,
    //     image: String
    // })

    // //QUERY?
    // const products = await Product.find().exec()
    const products = [];

    res.render('admin/index', { products })
}

module.exports = admin;