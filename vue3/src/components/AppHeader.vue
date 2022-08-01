<template>
    <nav class="w-full bg-blue-500 py-2 px-4 text-white">
        <router-link v-for="item in list" :key="item.to" :to="item.to" class="px-2">{{ item.title }}</router-link>
        <button class="px-2" @click="$emit('open-login-modal')">Login</button>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {title:"Home",to:"/"},
                {title:"Dc Heros",to:"/dc-heros"},
                {title:"Calendar",to:"/calendar"},
                {title:"Markdown",to:"/markdown"},
                {title:"Carousel",to:"/carousel"},
            ]
        }
    }
}
</script>

<style>

</style>