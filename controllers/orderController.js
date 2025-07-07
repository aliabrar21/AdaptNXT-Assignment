const Cart = require('../models/Cart');
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.id });
    const total = cart.items.reduce((sum, item) => sum + item.quantity * 10, 0); // Example price logic
    const order = new Order({
        userId: req.user.id,
        items: cart.items,
        total
    });
    await order.save();
    cart.items = [];
    await cart.save();
    res.json(order);
};
