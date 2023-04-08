const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const router = express.Router()

router.get('/', (request, response) => {
    response.render(path.join(rootDir, 'views', 'gifts', 'index.ejs'))
})

module.exports = router