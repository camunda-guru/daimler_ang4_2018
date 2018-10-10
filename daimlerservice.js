var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');

//rest object
var app =express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//rest service path

app.get('/',function(req,res)
{
    res.send("Ready to go!!!")
})

app.post('/register',function(req,res)
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(req.body);
    res.send({"userName":req.body.firstName,
        "message":"Received user information"});
})


app.listen(5500,function()
{
    console.log("Server up! running at http://localhost:5500");
})