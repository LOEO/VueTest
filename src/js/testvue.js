import Vue from "vue";
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
        reverse: function() {
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