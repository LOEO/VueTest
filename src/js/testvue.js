import Vue from "vue";
import "./component/todo";
import "./component/todolist";
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!' + new Date()
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        seen: false
    }
})

var todo = new Vue({
    el: '#todo',
    data: {
        list: [
            { name: "1", text: "1" },
            { name: "2", text: "2" },
            { name: "3", text: "3" },
            { name: "4", text: "4" }
        ]
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        message: "逆转"
    },
    methods: {
        reverse: function () {
            this.message = this.message.split("").reverse().join("");
        }
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        message: "hello"
    },
});

var app5 = new Vue({
    el: "#app5",
    data: {
        username: true,
        url: "www.baidu.com",
        rawId: "aaa",
        groceryList: [
            { text: 1 },
            { text: 2 },
            { text: 3 },
            { text: 4 },
            { text: 5 }
        ]
    },
    methods: {
        toggle: function () {
            this.username = !this.username;
        }
    },
    filters: {
        formateId: function (value) {
            console.log(value);
            return value + "bbb";
        }
    }
});

var todoList = new Vue({
    el:"#todoList",
    data:{
        text:"11",
        todoItems:[
            "吃饭",
            "上厕所",
            "睡觉"
        ]
    },
    methods:{
        addItem:function(){
            if(this.text==="") return;
            this.todoItems.push(this.text);
            this.text="";
        }
    }
});