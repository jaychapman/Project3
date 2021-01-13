const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    zip: { type: String, required: true },
    whoNeeds: { type: String },
    howSoon: { type: String, default: "Not Sure" },
    date: { type: Date, default: Date.now  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;