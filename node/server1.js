const express = require('express');
const app = express();

app.use((request,response,next) => {
    console.log('In the middleware!');
    next();
})

app.get('/students', (request,response,next) => {
    const students = [
        {id: '001', name: 'John', age: 20},
        {id: '002', name: 'Mary', age: 21},
        {id: '003', name: 'Peter', age: 22},
    ];
    response.send(students);
});

app.listen(5000,(err) => {
    if(err) console.log(err);
    console.log('Server is running on port 5000');
});