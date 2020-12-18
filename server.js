const express = require('express')
const app = express()
const port = '4444'
const bodyParser = require('body-parser')
const userRouter = require('./routes/router.js')

//body-parser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Routers
app.use('/user',userRouter)
//http://localhost:4444/user/ <<switch port

//Home
app.get('/',(req,res)=>{
    res.send('E ae blz! vá para a rota /user cotoco!')
})

//Server
app.listen(port,(error)=>{
    if(error){
        console.error(error)
    }else{
        console.log(`Servidor Rodando em http://localhost:${port}`)
    }
})