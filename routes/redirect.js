const express = require('express');
const { redirect } = require('express/lib/response');
let Redirect =  express.Router();


let RedirectFrom = '';
Redirect.get('/old',(req,res)=>{
    if(RedirectFrom === 'new')
    {
        RedirectFrom='';
        res.send('OLD!');
    }
    else
    {
        RedirectFrom = 'old';
        res.redirect('/redirect/new')
    }
});

Redirect.get('/new',(req,res)=>{
    if(RedirectFrom==='old')
    {
        RedirectFrom='';
        res.send('NEW');
    }
    else 
    {
        RedirectFrom='new';
        res.redirect('/redirect/old');
    }
})

module.exports=Redirect;
