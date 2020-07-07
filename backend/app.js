const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    next();
});


const db = require('./helper/Connection');
const validatore = require('./helper/Validator');
const { DateValidator, contentValidation } = validatore;

// connect to remote database
db();

const listingsAndReviews = require('./models/listingsAndReview');

app.post('/api/lists', (req, res) => {
    const { isValid, errors } = DateValidator(req.body);

    if (!isValid) {
        return res.status(400).json({
            code: 400,
            message: "Bad request, the parameters (startDate or endDate) are invalid.",
            errors,
            records: []
        });
    }

    const { startDate, endDate } = req.body;
    let frstDate, scndDate; // they will store the splitted string words which are year,month,day.

    scndDate = endDate.split('-');
    frstDate = startDate.split('-');

    listingsAndReviews
        .find()
        .limit(4)
        .where('last_scraped')
        .lte(new Date(scndDate[0], scndDate[1], scndDate[2]))
        .gte(new Date(frstDate[0], frstDate[1], frstDate[2]))
        .exec((err, doc) => {
            if (err) {
                return res.status(400).json({
                    code: 500,
                    message: "oOoOps! something went wrong!",
                    err
                });
            }
            else {
                return res.status(200).json({
                    code: 0,
                    message: "Data fetched!",
                    records: doc
                });
            }
        });
});

app.post('/api/unique', (req, res) => {  //  fetch a single element by _id as an Object.
    
    const { isValid, errors } = contentValidation(req.body);
    
    if (!isValid) {
        return res.status(400).json({
            code: 400,
            message: "Bad request, the _id is invalid.",
            errors
        });
    } 

    listingsAndReviews
        .findOne({ "_id": req.body })
        .exec((err, doc) => {
            if (err) {
                return res.status(400).json({
                    code: 500,
                    message: "oOoOps! something went wrong!",
                    err
                });
            }
            else {
                return res.status(200).json({
                    code: 0,
                    message: "Data fetched!",
                    records: doc
                });
            }
        });
});

module.exports = app;