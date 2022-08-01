<template>
  <div class="m-auto">
      <h1 class="text-2xl text-center m-5 font-bold">Dc Heros</h1>
      <p class="w-full text-sm text-center italic mt-0 mb-5">The heroic characters in DC Comics or Universe.</p>
      <h2 class="p-3 bg-blue-500 text-white font-bold text-center text-xl">A total of {{ herosCount }} heros listed below</h2>
      <ul class="bg-blue-300 p-5 font-bold">
        <li class="flex justify-between" v-for="(hero,index) in dcHeros" :key="hero.name">
          <div>{{ hero.name }}</div>
          <button @click="remove(index)">x</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
        <input class="border rounded text-lg" v-model="newHero" placeholder="Type Hero Name Here"/>
        <!--<textarea v-model.lazy="newHero"></textarea>-->
        <button class="border rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-lg text-white pr-5 pl-5" type="submit">Add Hero</button>
      </form>
    </div>
</template>

<script>
export default {
  data(){
    return{
      newHero:"",
      dcHeros: [{name:'SuperGirl'},{name:'Flash'},{name:'Batman'},{name:'Arrow'},{name:'SuperMan'}],
    }
  },
  computed: {
    herosCount(){
      return this.dcHeros.length;
    },
  },
  methods:{
    addHero(){
      if(this.newHero !== ""){
        this.dcHeros.unshift({name:this.newHero});
        this.newHero = "";
      }
    },
    remove(index){
      this.dcHeros = this.dcHeros.filter((hero,i) => i != index);
    },
  },
}
</script>

<style>

</style>