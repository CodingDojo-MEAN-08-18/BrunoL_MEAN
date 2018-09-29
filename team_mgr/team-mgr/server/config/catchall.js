const router = require('express').Router()
const path = require('path')

router.all('*', (request, response, next) => {
    
    console.log('catch all get request:', request.url);
    
    //if(request.url.indexOf('.js')==-1){
        response.sendFile(path.join(__dirname,'../../public/dist/index.html'));
    /*}else{
        response.sendFile(path.join(__dirname,'../../public/dist', request.url)); 
    }*/
    
})

module.exports = router;


/*
module.exports = function(app){
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html")) // if no node routing rule defined, this will tell it (?) to use use the angular routuing rules
    });
} */