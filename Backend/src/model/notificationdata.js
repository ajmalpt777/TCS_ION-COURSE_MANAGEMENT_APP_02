const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CourseDb');

const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    message: String,
    c_id:String,
    time:String   
});

var Notificationdata = mongoose.model('notificationdata',NotificationSchema);

module.exports = Notificationdata;