const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
    companyName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    zip: { type: String, required: true },
    radius: { type: String, required: true },
    insured: { type: String },
    backgroundCheck: { type: String },
    zipCodes: [ String ],
    date: { type: Date, default: Date.now  }
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;