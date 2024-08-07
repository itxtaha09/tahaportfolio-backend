const express = require('express');
const cors = require('cors');
const connectToMongoDb = require('./config/mongodb.js');
const createContactController = require('./controllers/createContactController.js');
const appConfig = require('./config/appConfig.js');
const app = express();

app.use(express.json());
app.use(cors());

const port = appConfig.PORT;

connectToMongoDb();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post(`/add-contact`, createContactController)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})