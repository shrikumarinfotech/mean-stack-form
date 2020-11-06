// import mongoose
const mongoose = require('mongoose');
// define Schema with mongoose
const Schema = mongoose.Schema;
// define Schema structure
const submissionSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    country: String,
    zip: String,
    phone: Number,
    comments: String,
    createdDate: String,
    updatedDate: String,
    subscribed: Boolean
});
// define model
const Submissions = mongoose.model('Submissions', submissionSchema);
// export model
module.exports = Submissions;

