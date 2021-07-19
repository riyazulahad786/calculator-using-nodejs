const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.send('welcome to dubai');
});

app.get('/about',function(req,res){
    res.send('ABOUT US location : mumbai ');
    
});

app.get('/callus',function(req,res){
    res.send('ABOUT US location : delhi ');
});

app.get('/calculator', function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post('/calculator',function(req,res){
    
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;
    res.send('the sum of the two number is :'+sum);
});



app.get('/bmi',function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post('/bmi',function(req,res){
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.height);

    let bmi = w1 /(h1*h1);
    res.send('the bmi  is :'+bmi);
});

app.listen(3000, function(req,res){
    console.log('server is running at local host');
});