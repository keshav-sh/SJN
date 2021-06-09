import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', function(req, res){
    res.send(data.products);
});

app.get('/', function(req,res){
    res.send('server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port,function(err,done){
    if(err){
        console.log('err in listening');
    }else{
        console.log('Success in listening port >>'+port);
        console.log('To exit ctrl+C');
    }
});