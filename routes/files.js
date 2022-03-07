const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path')

router.post('/uploads',async(req,res)=>
{
    
    const keys =Object.keys(req.files);

    keys.forEach((key)=>
    {
        const fileName = `${Math.random().toString(36)}`;
        const fileObject = req.files[key];
        const fileExtension = fileObject.name.split('.').pop()
        const destination = `${path.join(__dirname,'..')}/uploads/${fileName}.${fileExtension}`
        fileObject.mv(destination);
    })

})

module.exports=router;