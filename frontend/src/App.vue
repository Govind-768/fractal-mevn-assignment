<script setup>
import Feed from "./components/Feed.vue"
</script>

<template>

<div class="app">

<h1 class="title">Activity Feed</h1>

<Feed />

</div>

</template>

<style>

body{
margin:0;
font-family:Inter,Arial,sans-serif;
background:#020617;
color:white;
}

/* background glow */

body::before{
content:"";
position:fixed;
top:-200px;
left:-200px;
width:500px;
height:500px;
background:radial-gradient(circle,#3b82f6,transparent);
filter:blur(120px);
opacity:0.4;
}

body::after{
content:"";
position:fixed;
bottom:-200px;
right:-200px;
width:500px;
height:500px;
background:radial-gradient(circle,#9333ea,transparent);
filter:blur(120px);
opacity:0.4;
}

.app{
max-width:720px;
margin:auto;
padding:40px 20px;
position:relative;
z-index:1;
}

.title{
text-align:center;
font-size:36px;
margin-bottom:40px;

background:linear-gradient(90deg,#3b82f6,#9333ea);
background-clip:text;
-webkit-background-clip:text;

color:transparent;
}

</style>