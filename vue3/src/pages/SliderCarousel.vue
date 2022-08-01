<template>
  <div class="flex flex-wrap w-full">
        <h1 class="w-full text-2xl text-center my-5 font-bold">Slider Carousel</h1>
        <p class="w-full text-sm text-center italic mt-0 mb-5">A slideshow for cycling through a series of content.</p>
        <div v-for="(color,index) in sliders" :key="color" class="w-full relative">
            <transition name="fade">
                <div v-if="currentSlide == index" class="absolute w-full" :class="color" style="height:350px"></div>
            </transition>
        </div>
        <div class="absolute w-full flex justify-center" style="margin-top:430px">
            <div v-for="(slider,index) in sliders" :key="slider" @click="makeActive(index)" class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md" :class="currentSlide == index ? 'bg-slate-700' : 'bg-slate-300'"></div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentSlide: 0,
            sliders:['bg-blue-300','bg-yellow-300','bg-green-300'],
            interval: "",
        };
    },
    methods:{
        makeActive(index){
            this.currentSlide = index;
        }
    },
    mounted(){
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide == 2 ? 0:this.currentSlide+1;
        }, 3000)
    },
    beforeUnmount(){
        clearInterval(this.interval);
    },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active{
    transition: all 1s ease;
    position: fixed;
}

.fade-enter-from{
    opacity: 0;
    transform: translateX(100%);
}

.fade-leave-to{
    opacity: 0;
    transform: translateX(-100%);
}
</style>