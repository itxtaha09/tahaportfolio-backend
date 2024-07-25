const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    firstname: String, // String is shorthand for {type: String}
    lastname: String,
    email: String,
    phone: String,
    message: String,
    service: String,
});

const Contact = mongoose.model('Contacts', contactSchema)
module.exports = Contact;

