const express = require('express')
const router = express.Router()
const fetchController = require('../controllers/fetchController')

//a root route for the endpoint

router.route('/data')
    .get(fetchController)


module.exports = router;