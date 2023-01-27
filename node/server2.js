const express = require('express');
const app = express();

app.use((request,response,next) => {
    console.log('In the middleware 2!');
    next();
})

app.get('/cars', (request,response,next) => {
    const cars = [
        {id: '001', name: 'BMW', price: 20000},
        {id: '002', name: 'Audi', price: 25000},
        {id: '003', name: 'Mercedes', price: 30000},
    ];
    response.send(cars);
});

app.listen(5001,(err) => {
    if(err) console.log(err);
    console.log('Server is running on port 5001');
});