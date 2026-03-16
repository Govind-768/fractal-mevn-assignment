const express = require("express")
const router = express.Router()

const Activity = require("../models/Activity")

router.get("/feed", async(req,res)=>{

try{

const limit = parseInt(req.query.limit) || 10
const lastId = req.query.lastId

let query = {}

if(lastId){
query._id = {$lt:lastId}
}

const activities = await Activity
.find(query)
.sort({_id:-1})
.limit(limit)

res.json(activities)

}catch(error){

res.status(500).json({message:"Server error"})

}

})

module.exports = router