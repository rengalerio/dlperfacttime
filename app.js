const express = require('express')
const layout = require('express-ejs-layouts')
const path = require('path')
const rootDir = require('./utils/path')

require('dotenv').config();

const app = express()
const port = 3000

const homeRouter = require('./routes/route.js')
const entourageRouter = require('./routes/entourage-route.js')
const detailsRouter = require('./routes/details-route.js')
// const giftRouter = require('./routes/gifts-route.js')
// const notFoundRouter = require('./routes/notfound-route.js')

app.use(layout)
app.use(express.static('public'))
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(homeRouter)
app.use('/entourage', entourageRouter)
app.use('/details', detailsRouter)
// app.use('/gifts', giftRouter)
// app.use(notFoundRouter)

app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})