const express = require('express')
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require("./config/db")

connectDB()

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


// Simran token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTIyNjM2NmU4Y2EyZDE0YjU4YTllZSIsImlhdCI6MTc1NTYyOTY3OCwiZXhwIjoxNzU4MjIxNjc4fQ.XiaSNJ_DjooADOfvrJsFs-O0ZJ52lZZraUpnBOST2w4

// Pawan Token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTIyNjU1NmU4Y2EyZDE0YjU4YTlmMSIsImlhdCI6MTc1NTYzMDIxMiwiZXhwIjoxNzU4MjIyMjEyfQ.l-tFkVEtnw46r3j3kdyTug_7C47kD2JlBuXOdRw_NcM