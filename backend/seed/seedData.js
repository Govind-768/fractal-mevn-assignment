const mongoose = require("mongoose")
const Activity = require("../models/Activity")

mongoose.connect("mongodb://127.0.0.1:27017/activityFeedDB")

const seedData = async ()=>{

await Activity.deleteMany()

for(let i=1;i<=50;i++){

await Activity.create({

title:`Activity ${i}`,
description:`This is sample activity ${i}`

})

}

console.log("Database seeded")

process.exit()

}

seedData()