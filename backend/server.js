//***************************
// DEPENDENCIES
//***************************
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

//***************************
// Database Connection
//***************************
const mongoose = require("./db/connection")

//***************************
// GLOBAL VARIABLES
//***************************
const {PORT = 4000} = process.env //destructuring env variables

//***************************
// Application Object
//***************************

const app = express()

//***************************
// Middleware
//***************************
app.use(cors()) // to prevent cors errors, currently allowing all traffic
app.use(morgan("tiny")) // server logging
app.use(express.json()) // parse json bodies
app.use(express.urlencoded({extended: true})) //parse urlencoded form data bodies

//***************************
// ROUTES AND ROUTERS
//***************************

app.get("/", (req, res) => {
    res.json({hello: "world"})
})

//***************************
// Server Listener
//***************************

app.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`)
})