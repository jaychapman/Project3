const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    zip: { type: String, required: true },
    whoNeeds: { type: String, required: true },
    howSoon: { type: String, required: true },
    date: { type: Date, default: Date.now  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;