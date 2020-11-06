const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
	user_id: Number,
	product_id: Number,
	price: String,
	quantity: String,
	total: String,
	phone: String,
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('order', OrderSchema);