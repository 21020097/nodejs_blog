const express = require('express');

// Cho phép chúng ta tạo rất nhiều route bên trong
let router = express.Router();

router.get('/',(req,res)=>{
    let {type=''} = req.query;
    switch(type.toLowerCase()){
        case 'date':
            let NOW = new Date();
            let mydate = NOW.getDate();
            let myMonth = NOW.getMonth()+1;
            let myYear = NOW.getFullYear();
            res.send(`${mydate}_${myMonth}_${myYear}`);   
        default:
            res.send('Wrong');
    }
});

router.get('/abc',(req,res)=>{
    res.send('You called systemInfo');
})

module.exports = router