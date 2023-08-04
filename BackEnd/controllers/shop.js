const Product = require('../models/product');

exports.getProduct = async (req, res, next) =>{

    const products = await Product.find();

    res.status(200).json({message: 'Products Fethced', products: products});
};