const mongoose = require('mongoose');

const { MONGO_URI } = process.env

mongoose.connect(MONGO_URI || 'mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'ERROR:'));
db.once('open', () => {
    console.log('MongoDB connection successfully')
});

module.exports = db