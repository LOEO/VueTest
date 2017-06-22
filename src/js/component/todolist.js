import Vue from "vue";
Vue.component("todo-list-item", {
    template: `<li>{{todo}}<button @click='$emit("remove")'>X</button></li>`,
    props:["todo"]
})