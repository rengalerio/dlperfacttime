const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const router = express.Router()

router.get('/', (request, response) => {
    response.render(path.join(rootDir, 'views', 'index.ejs'))
})

router.get('/res/images/carousel-1.webp', (request, response) => {
    response.send(path.join(rootDir, 'public', 'res', 'images', 'carousel-1.webp'))
})

module.exports = router