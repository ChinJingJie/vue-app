<template>
    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-2xl text-center my-5 font-bold">Markdown</h1>
        <p class="w-full text-sm text-center italic mt-0 mb-5">A text-to-HTML conversion tool for web writers.</p>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea class="w-full h-full" :value="text" @input="update"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
        </section>
    </div>
</template>

<script>
import { marked } from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
    mixins: [debounce],
    data(){
        return{
            text:"",
        }
    },
    computed:{
        markedText(){
            return marked(this.text);
        }
    },
    methods:{
        update(e){
            const task = () => (this.text = e.target.value);
            this.debounce(task);
        },
    },
}
</script>

<style>

</style>