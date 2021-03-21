const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CourseDb');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: String,
    duration:String,
    image:String,
    professor:String,
    email:String,
    details:String,
    qualification:String,
    type:String,
    startdate:String,
    level:String
    
});

var Coursedata = mongoose.model('coursedata',CourseSchema);

module.exports = Coursedata;