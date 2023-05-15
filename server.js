const express = require('express')
const app = express()
const root = require('./routers/root')
const fetch = require('./routers/fetch')
require('dotenv').config()
const PORT = process.env.PORT || 5000



app.use(root)
app.use(fetch)

app.all('*',(req,res)=>{
    res.status(404).send("404 NOT FOUND")
})


  app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
}) 