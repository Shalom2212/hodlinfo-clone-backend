const express = require('express')
const router = express.Router()

//a root route for the endpoint

router.get(`^/$`,(req,res)=>{
    res.status(200).send('Crypto-api by shalom project assignment by QuadB')
})


module.exports = router;