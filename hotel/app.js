var express = require('express');
var app = express();
var list = require('./student.json');


app.get('/home', function (req, res) {
    res.send('welcome to express')    
})

app.get('/showstudents', function(req,res){
    res.send(list);
})

app.get('/search',function(req,res){
    var name = req.query.name;
    var sublist =[];
    var flag =0;
    for(const i in list){
        if(list[i].name == name){
            flag = 1;
            sublist.push(list[i]);
            
        }
    }
    if(flag == 0)
        res.send('Hotel not found');
        res.send(sublist);
})


app.listen('3000', function(){
    console.log('server listening to port 3000');
});