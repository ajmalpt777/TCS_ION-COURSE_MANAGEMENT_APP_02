const express = require('express');
const UserData = require('./src/model/userdata');
const ProfData = require('./src/model/profdata');
const CourseData = require('./src/model/coursedata');
const EnrollData = require('./src/model/enrollrequest');
const NotificationData = require('./src/model/notificationdata');
const MessageData = require('./src/model/messagedata');


const cors = require('cors');
var bcrypt = require('bcrypt');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken'); 
const {  name } = require('ejs');
const app = new express();

app.use(cors());
app.use(bodyparser.json());

app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

app.post('/signup-user',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    console.log(req.body);
    let userData = req.body
    console.log(userData.email1);
    console.log(UserData.exists({email: userData.email1}));
    UserData.exists({email: userData.email1})
    .then(function(docs){
        if(docs){
            
            msg2="exist";
            res.status(200).send({msg2}); 
            console.log("exist");
        }
        else{
            
            var user={
                name:req.body.name1,
                 email:req.body.email1,
                 password1:req.body.password1,
                 password2:req.body.password2
            } 
            var user=new UserData(user);
            user.save();

            msg1="success";
            res.status(200).send({msg1}); 
            console.log("not exist");
        }
    })
})

app.post('/login-user', (req, res) => {
    let userData = req.body
            UserData.findOne({email: userData.username, password1: userData.password})
            .then(function(userdata){
                if(userdata != null){
                    
                    let payload = {subject: userData.username+userData.password}
                    let tokenUser = jwt.sign(payload, 'secretKey')
                    res.status(200).send({tokenUser})  

                }
                else{
                    msg="Try Again";
                    res.status(200).send({msg});
                };
            })     
    })

    app.post('/signup-prof',(req,res)=>{
        res.header("Acess-Control-Allow-Origin","*");
        res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
        console.log(req.body);
        let code=12345678
        let userData = req.body
        console.log(userData.email1);
        console.log(userData.code);
        console.log(ProfData.exists({email: userData.email1}));
        ProfData.exists({email: userData.email1})
        .then(function(docs){
            if(docs){
                
                msg2="exist";
                res.status(200).send({msg2}); 
                console.log("exist");
            }
            else if(code != userData.code){

                msg2="exist";
                res.status(200).send({msg2}); 
                console.log("exist");

            }
            else{
                
                var user={
                    name:req.body.name1,
                     email:req.body.email1,
                     password1:req.body.password1,
                     password2:req.body.password2
                } 
                var user=new ProfData(user);
                user.save();
    
                msg1="success";
                res.status(200).send({msg1}); 
                console.log("not exist");
            }
        })
    })

    app.post('/login-prof', (req, res) => {
        let userData = req.body
                ProfData.findOne({email: userData.username, password1: userData.password})
                .then(function(userdata){
                    if(userdata != null){
                        
                        let payload = {subject: userdata.username+userdata.password}
                        let tokenProf = jwt.sign(payload, 'secretKey')
                        res.status(200).send({tokenProf})  
    
                    }
                    else{
                        msg="Try Again";
                        res.status(200).send({msg});
                    };
                })     
        })

        app.get('/user-profile/:id',(req,res)=>{
            const id=req.params.id;
            UserData.find({"email":id})
            .then((profile)=>{
                res.send(profile);
            })
    })

    app.get('/user-profileone/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id);
        UserData.findOne({"_id":id})
        .then((profile)=>{
            res.send(profile);
        })
})


    app.put('/edit-user',(req,res)=>{
        console.log(req.body)
        id=req.body._id,
             tname= req.body.name,
             email= req.body.email,
             address= req.body.address,
             dob= req.body.dob,
             mothertongue= req.body.mothertongue,
             languages= req.body.languages,
             hobbies= req.body.hobbies,
             education= req.body.education,
             number=req.body.number
       UserData.findByIdAndUpdate({"_id":id},
                                    {$set:{
                                    "name":tname,
                            "email":email,
                            "address":address,
                            "dob":dob,
                            "mothertongue":mothertongue,
                        "hobbies":hobbies,
                        "education":education,
                        "languages":languages,
                        "number":number
                    }})
       .then(function(){
           res.send();
       })
     })

     app.put('/edit-course',(req,res)=>{
        console.log(req.body)
        id=req.body._id,
             tname= req.body.name,
             duration= req.body.duration,
             image= req.body.image,
             professor= req.body.professor,
             email= req.body.email,
             details= req.body.details,
             qualification= req.body.qualification,
             type= req.body.type,
             startdate= req.body.startdate,
             level= req.body.level
       CourseData.findByIdAndUpdate({"_id":id},
                                    {$set:{
                                    "name":tname,
                            "duration":duration,
                            "image":image,
                            "professor":professor,
                            "email":email,
                        "details":details,
                        "qualification":qualification,
                        "type":type,
                        "startdate":startdate,
                        "level":level
                    }})
       .then(function(){
           res.send();
       })
     })



     app.get('/prof-profile/:id',(req,res)=>{
        const id=req.params.id;
        ProfData.find({"email":id})
        .then((profile)=>{
            res.send(profile);
        })
})

app.get('/prof-profileone/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    ProfData.findOne({"_id":id})
    .then((profile)=>{
        res.send(profile);
    })
})


app.put('/edit-prof',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
         tname= req.body.name,
         email= req.body.email,
         address= req.body.address,
         dob= req.body.dob,
         mothertongue= req.body.mothertongue,
         languages= req.body.languages,
         hobbies= req.body.hobbies,
         education= req.body.education,
         number=req.body.number
   ProfData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "name":tname,
                        "email":email,
                        "address":address,
                        "dob":dob,
                        "mothertongue":mothertongue,
                    "hobbies":hobbies,
                    "education":education,
                    "languages":languages,
                    "number":number
                }})
   .then(function(){
       res.send();
   })
 })

 app.post('/course-add',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    console.log(req.body);
    var course={
         name: req.body.name,
         image: req.body.image,
         professor: req.body.professor,
         email: req.body.email,
         details: req.body.details,
         qualification: req.body.qualification,
         duration: req.body.duration,
         type: req.body.type,
         startdate:req.body.startdate,
         level:req.body.level
         
    }
    var course=new CourseData(course);
    course.save();
});

app.get('/courses-taken/:id', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    id = req.params.id;
    console.log(id);
    CourseData.find({"email":id}).then (function(courses){
        res.send(courses);
    });
});

app.get('/courses-enrolled/:id', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    id = req.params.id;
    status="accept";
    var array=[];
    console.log(id);
    EnrollData.find({"s_email":id,"status":status},'c_id').then ( function(courses){
    
        courses.forEach(
            function getData(currentValue, index){
        
            CourseData.findOne({"_id":{$in : [currentValue.c_id]}}).then ( function(course){
            
                array.push(course);
            })
            
        });

        setTimeout(function(){ res.send(array); }, 1500);
        
    }  );
    
});

app.get('/courses-requested/:id', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    id = req.params.id;
    status="requested";
    var array=[];
    console.log(id);
    EnrollData.find({"s_email":id,"status":status},'c_id').then ( function(courses){
    
        console.log(courses)
        courses.forEach(
            function getData(currentValue, index){
        
            CourseData.findOne({"_id":{$in : [currentValue.c_id]}}).then ( function(course){
            
                array.push(course);
            })
            
        });

        setTimeout(function(){ res.send(array); console.log(array)}, 1500);
        
        
    }  );
    
});




app.get('/all-courses', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    CourseData.find().sort({$natural: -1}).then (function(courses){
        res.send(courses);
    });
});

app.get('/course-details/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    CourseData.find({"_id":id})
    .then((course)=>{
        res.send(course);
    })
})

app.get('/course-details-prof/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    CourseData.findOne({"_id":id})
    .then((course)=>{
        res.send(course);
    })
})

app.post('/enroll-course',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
      
    console.log(req.body);
    var item={
         c_name: req.body.c_name,
         c_professor: req.body.c_professor,
         p_email: req.body.p_email,
         s_name: req.body.s_name,
         s_email: req.body.s_email,
         s_education:req.body.s_education,
         status:req.body.status,
         c_id:req.body.c_id      
    }
    console.log(item);
    var item=new EnrollData(item);
    item.save();
});



app.post('/enroll-status',(req,res)=>{
    
    c_name=req.body.c_name,
    p_email= req.body.p_email,
    s_email= req.body.s_email,  

    EnrollData.find({"c_name":c_name,"p_email":p_email,"s_email":s_email})
    .then((status)=>{
        res.send(status);
    })
})

app.post('/get-request',(req,res)=>{
    console.log(req.body)
    c_id=req.body.c_id,
    p_email= req.body.p_email, 
    EnrollData.find({"c_id":c_id,"p_email":p_email,"status":"requested"})
    .then((status)=>{
        res.send(status);
        console.log(status);
    })
})

app.post('/accept-request',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    console.log("app");
    body=req.body
    console.log(body);
    c_id=req.body.c_id;
    id=req.body._id;
   EnrollData.find({"c_id":c_id,"status":"accepted"}).then(function(data){
      if(data.length <= 40){

        EnrollData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "status":"accept",
                }})
   .then(function(data){
    lessthan="Lessthan";
    res.status(200).send({lessthan});
   })

      }

      else{
        greater="greater";
        res.status(200).send({greater});

      }

   })

//    EnrollData.findByIdAndUpdate({"_id":id},
//                                 {$set:{
//                                 "status":"accept",
//                 }})
//    .then(function(data){
//        res.send(data);
//    })

});

app.get('/enroll-number/:id',(req,res)=>{
    console.log("number")
    const id=req.params.id;
    status="accept";
    console.log(id);
    EnrollData.find({"c_id":id,"status":status})
    .then((course)=>{
        res.send(course);
    })
})

app.delete('/decline-request/:id',(req,res)=>{
   
    id = req.params.id;
    EnrollData.findByIdAndDelete({"_id":id})
    .then(()=>{
        res.send();
    })
  })

  app.post('/add-notification',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    console.log(req.body);

    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
    console.log(date ,month ,year,hour,minute );
    var time = date.concat('/',month,'/',year,'  ',hour,':',minute);
    console.log(time)

    var notification={
         message: req.body.message,
         c_id: req.body.c_id,
         time:time     
    }
    var notification=new NotificationData(notification);
    notification.save();
});

app.get('/get-notification/:id', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    id=req.params.id;
    console.log(id);
    
    NotificationData.find({"c_id":id}).sort({$natural: -1}).then (function(notifications){
        res.send(notifications);
    });
});

app.post('/send-message',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    console.log(req.body);
    var message={
         r_id: req.body.r_id,
         s_id: req.body.s_id,
         s_name: req.body.s_name,
         message: req.body.message,
         about: req.body.about     
    }
    var message=new MessageData(message);
    message.save();
});

app.get('/get-message/:id', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    id=req.params.id;
    console.log(id);
    
    MessageData.find({"r_id":id}).sort({$natural: -1}).then (function(message){
        res.send(message);
    });
});



app.listen(3000);