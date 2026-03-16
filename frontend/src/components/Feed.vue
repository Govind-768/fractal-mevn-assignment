<script setup>

import { ref, onMounted } from "vue"
import axios from "axios"
import ActivityCard from "./ActivityCard.vue"

const activities = ref([])
const loading = ref(false)

let page = 1

const fetchActivities = async () => {

if(loading.value) return

loading.value = true

try{

const res = await axios.get(
`http://localhost:3000/api/feed?page=${page}&limit=10`
)

activities.value.push(...res.data)

page++

}catch(err){

console.log(err)

}

loading.value=false

}

const handleScroll = () => {

const bottomReached =
window.innerHeight + window.scrollY >= document.body.offsetHeight - 120

if(bottomReached){
fetchActivities()
}

}

onMounted(()=>{

fetchActivities()

window.addEventListener("scroll",handleScroll)

})

</script>


<template>

<div class="feed">

<ActivityCard
v-for="item in activities"
:key="item._id"
:activity="item"
/>

<div v-if="loading" class="loader">

Loading more activities...

</div>

</div>

</template>


<style>

.feed{
display:flex;
flex-direction:column;
gap:10px;
}

.loader{
text-align:center;
padding:20px;
color:#9ca3af;
}

</style>