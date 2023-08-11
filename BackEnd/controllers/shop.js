const Product = require('../models/product');

exports.getProducts = async (req, res, next) =>{

    const products = await Product.find();

    res.status(200).json({message: 'Products Fethced', products: products});
};

exports.getProduct = async (req, res, next) =>{
    const productId = req.params.productID;
    try{
        const product = await Product.findById(productId);
        res.status(200).json({message: 'correctly fetched', product: product});
    }catch{

    }
};