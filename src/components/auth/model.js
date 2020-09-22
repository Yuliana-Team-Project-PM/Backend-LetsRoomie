const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    _id: String,
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { _id: false });

//Le pasamos nombre de la collección, esquema
const model = mongoose.model('User', mySchema);

module.exports = model;