const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
    const { name, category } = req.query;
    const query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (category) query.category = category;
    const products = await Product.find(query);
    res.json(products);
};

exports.addProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
};

exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Product deleted' });
};
