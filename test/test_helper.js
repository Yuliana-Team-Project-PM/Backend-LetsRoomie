const mongoose = require('mongoose')

before(done =>{
    mongoose.connect('mongodb://localhost/roomie_test');
    mongoose.connection
    .once('open', ()=>{
        console.log('Connected to DB test');
        done();
    })
    .on('error', err => {
        console.warn('Warning', err);
    });
});