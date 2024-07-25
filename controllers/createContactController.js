const Contact = require("../models/contactModel")

const createContactController = async (req, res) => {

    const {firstname, lastname, email, phone, message, service} = (req.body)

    const contact = new Contact({
        firstname,
        lastname,
        email,
        phone,
        message,
        service,
    })
    // Save the contact to the database
    await contact.save();

    return res.json({
        success: true,
        contact,
    })

}

module.exports = createContactController;