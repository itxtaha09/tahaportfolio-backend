const mongoose = require('mongoose');

const connectToMongoDb = async () => {
    try {
        const connectionResponse = await mongoose.connect(`mongodb://127.0.0.1:27017/portfolio`)
        if (connectionResponse) {
            console.log(`connected to mongo db mongodb://127.0.0.1:27017/portfolio`)
        } else {
            console.log(`an error occurred`)
        }
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = connectToMongoDb;