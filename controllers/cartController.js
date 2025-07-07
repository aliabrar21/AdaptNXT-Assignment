const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    res.json(cart);
};

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
        cart = new Cart({ userId: req.user.id, items: [{ productId, quantity }] });
    } else {
        const item = cart.items.find(i => i.productId.toString() === productId);
        if (item) item.quantity += quantity;
        else cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.json(cart);
};

exports.updateCartItem = async (req, res) => {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user.id });
    const item = cart.items.id(req.params.itemId);
    item.quantity = quantity;
    await cart.save();
    res.json(cart);
};

exports.removeCartItem = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.id });
    cart.items.id(req.params.itemId).remove();
    await cart.save();
    res.json(cart);
};
