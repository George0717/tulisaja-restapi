require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// app.use(bodyParser.urlEncoded({
//     extended: true
// }))
app.use(express.urlencoded());
app.use(bodyParser.json())
app.use(cors())

// import Route
const postRoutes = require('./routes/post')
app.use('/post', postRoutes)
// mongoose.connect(process.env.DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
let db = mongoose.connection
// Handle Error
db.on('error', console.error.bind(console, 'Error Establishing a Database'))
// Handle Succes
db.once('open', () => {
    console.log("Database is connected")
})

app.get('/', (req, res) => {
    res.send('Hello World!3')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})