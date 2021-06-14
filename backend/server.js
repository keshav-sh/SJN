import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/:id', function(req, res){
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({ message: 'Product not Found' });
    }
});

app.get('/api/products', function(req, res){
    res.send(data.products);
});

app.get('/', function(req,res){
    res.send('server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port,function(err){
    if(err){
        console.log('err in listening');
    }else{
        console.log('Success in listening port >>'+port);
        console.log('To exit ctrl+C');
    }
});