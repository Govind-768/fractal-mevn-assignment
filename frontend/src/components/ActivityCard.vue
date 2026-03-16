<template>

<div class="card">

<div class="header">

<div class="avatar"></div>

<div>

<h3>{{ activity.title }}</h3>
<span class="time">just now</span>

</div>

</div>

<p>{{ activity.description }}</p>

</div>

</template>

<script setup>

defineProps({
activity:Object
})

</script>

<style>

.card{

background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);

border-radius:14px;
padding:18px;

margin-bottom:18px;

border:1px solid rgba(255,255,255,0.08);

transition:all 0.25s ease;

}

.card:hover{

transform:translateY(-5px);
box-shadow:0 10px 30px rgba(0,0,0,0.5);

}

.header{

display:flex;
align-items:center;
gap:12px;
margin-bottom:10px;

}

.avatar{

width:36px;
height:36px;
border-radius:50%;

background:linear-gradient(135deg,#3b82f6,#9333ea);

}

h3{
margin:0;
font-size:16px;
}

.time{
font-size:12px;
color:#9ca3af;
}

p{
margin-top:6px;
color:#cbd5e1;
font-size:14px;
}

</style>