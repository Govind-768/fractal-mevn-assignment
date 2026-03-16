const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const feedRoutes = require("./routes/feedRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/activityFeedDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.use("/api", feedRoutes)

const PORT = 3000

app.listen(PORT, ()=>{
console.log("Server running on port 3000")
})