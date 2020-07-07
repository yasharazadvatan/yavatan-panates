const mongoose = require('mongoose');

module.exports = async () => {
    try { 
        mongoose.connect("mongodb+srv://dbUser:dbPassword@cluster0-6ehlt.mongodb.net/sample_airbnb?ssl=true&authSource=admin", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
            .then(() => {
                console.log('connect to mongoDb: success!');
            })
            .catch(() => {
                console.log('connect to mongoDb: failed!');
            });
    }
    catch (err) {
        console.log('connected to DB failed, error: ' + err);
    }
}
