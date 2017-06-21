import Vue from "vue";
Vue.component("todo-item",{
    props:["todo"],
    template:"<li>{{todo.text}}</li>"
});