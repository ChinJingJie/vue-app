<template>
    <section @click="$emit('close-login')" class="h-screen w-screen bg-slate-300 fixed top-0 opacity-50 z-20"></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="m-auto bg-white p-2 rounded shadow-md z-30 w-1/3">
                <div class="p-2 border bg-blue-300">
                    <h1 class="text-2xl text-center m-5 font-bold">Login</h1>
                <p class="w-full text-sm text-center italic mt-0 mb-5">A modal window for login</p>
                <form class="p-2 my-5" @submit.prevent="formSubmit">
                    <div class="my-5">
                        <label>Email or Username</label>
                        <input v-model="email" class="p-2 border rounded text-sm w-full" placeholder="enter your email / username" />
                    </div>
                    <div class="my-5">
                        <label>Password</label>
                        <input v-model="password" class="p-2 border rounded text-sm w-full" type="password" placeholder="enter your password" />
                    </div>
                    <div class="my-5">
                        <button class="border rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-lg text-white w-full" type="submit">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:"",
        };
    },
    methods:{
        formSubmit(){
            //submit the form to store in database
        },
    }
}
</script>

<style>

</style>