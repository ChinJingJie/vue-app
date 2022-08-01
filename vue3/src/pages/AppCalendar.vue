<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center m-5 font-bold">My Calendar</h1>
    <p class="w-full text-sm text-center italic mt-0 mb-5">The system of organizing days.</p>
    <h2 class="py-3 bg-blue-500 text-white font-bold underline text-center text-xl">{{ wordMonth }} {{ currentYear }}</h2>
    
    <section class="flex bg-blue-300">
      <p class="py-3 text-center" style="width:14.28%" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap bg-blue-100">
      <p class="py-3 text-center" style="width:14.28%" v-for="num in startDay()" :key="num"></p>
      <p class="py-3 text-center" style="width:14.28%" v-for="num in daysInMonth()" :key="num" :class="highlightToday(num)">{{ num }}</p>
    </section>
    <section class="px-5 py-3 flex justify-between bg-blue-500 text-white">
      <button @click="prev">&#8592; Prev Month</button>
      <button @click="next">Next Month &#8594;</button>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentDate: new Date().getUTCDate(),
      intMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    }
  },
  methods:{
    daysInMonth(){
      return new Date(this.currentYear,this.intMonth, 0).getDate();
    },
    startDay(){
      return new Date(this.currentYear,this.intMonth-1,1).getDay();
    },
    next(){
      if (this.intMonth > 11){
        this.intMonth = 1;
        this.currentYear++;
      }else{
        this.intMonth++;
      }
    },
    prev(){
      if (this.intMonth <= 1){
        this.intMonth = 12;
        this.currentYear--;
      }else{
        this.intMonth--;
      }
    },
    highlightToday(num){
      const calenderFullDate = new Date(this.currentYear,this.intMonth-1, num).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? 'bg-blue-500 font-bold text-white' : '';
    },
  },
  computed:{
    wordMonth(){
      return new Date(this.currentYear,this.intMonth-1).toLocaleString('default',{month:'long'});
    }
  },
}
</script>

<style>

</style>