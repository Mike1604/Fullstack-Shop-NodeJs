const Product = require('../models/product');

exports.addProduct = async (req, res, next) =>{
    const name = req.body.name;
    const imageUrl = 'https://www.njpac.org/wp-content/uploads/2023/04/800x600_Spider-man_onsale7.jpg';
    const price = req.body.price;
    const descr = req.body.descr;

    const product = new Product({
        name: name,
        price: price,
        imageUrl: imageUrl,
        description: descr
    })
    try{
        const resProduct = await product.save();
        res.status(200).json({message: 'Product saved', product: resProduct});
    }catch{
        res.status(500).json({message: 'An error has occured'});
    }
    

    
};