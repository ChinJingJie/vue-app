const template = `<div><h1>{{ name }}</h1></div>`;

const data = function data(){
    return {
        title: "Vue3 Tutorial",
        name: "SampleName",
    };
};

const App = { data,template };

Vue.createApp(App).mount("#vue-app");