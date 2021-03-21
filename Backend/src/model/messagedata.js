const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CourseDb');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String,
    s_id:String,
    r_id:String,
    s_name:String,
    about:String   
});

var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;