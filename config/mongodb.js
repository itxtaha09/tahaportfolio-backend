const mongoose = require('mongoose');
const appConfig = require('./appConfig');

const connectToMongoDb = async () => {
    try {
        const connectionResponse = await mongoose.connect(appConfig.MONGODB_URI)
        if (connectionResponse) {
            console.log(`connected to mongo db ${appConfig.MONGODB_URI}`)
        } else {
            console.log(`an error occurred`)
        }
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = connectToMongoDb;