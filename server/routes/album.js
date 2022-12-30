const express = require('express')
const router = express.Router()
const albumData = require('../controllers/albumData')
router.get('/:albumname',albumData)
module.exports=router