const express=require('express');
const cors=require('cors');
const url=require('url');
const {register,login,scholar}=require('./db');

const corsOptions={
    origin:'http://localhost:4200',
    methods:'GET,POST',
    credentials:true,
    optionSuccessStatus:204
}

api=express();
api.use(cors(corsOptions));

api.get('/register',async function(req,res){
    var urldata=url.parse(req.url,true);
    var username=urldata.query.username;
    var email=urldata.query.email;
    var password=urldata.query.password;
    var conpassword=urldata.query.conpassword;

    query={
        'username':username,
        'email':email,
        'password':password,
        'conpassword':conpassword
    };

    const response=await register(query);
    return  res.json({'message':response});
});

api.get('/login',async function(req,res){
    var urldata=url.parse(req.url,true);
    var email=urldata.query.email;
    var password=urldata.query.password;

    query={
        'email':email,
        'password':password
    };

    const response=await login(query);

    return res.json({'message':response});
});

api.get('/category',async function(req,res){
    var urldata=url.parse(req.url,true);
    var title=urldata.query.title;
    var award=urldata.query.award;
    var finaldate=urldata.query.finaldate;
    var category=urldata.query.category;

    query={
        'title':title,
        'award':award,
        'finaldate':finaldate,
        'category':category
    };

    const response=await scholar(query);

    return res.json({'message':response});
});

api.listen(2000,function(){
    console.log('API server started');
});
