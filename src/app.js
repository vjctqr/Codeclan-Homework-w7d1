import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#oshoma",
        data: {
            todo_list: [
            "Buy spinach from Tesco",
            "Cut lawn",
            "Feed cat"
        ],
        newTodo: ""

        },
        methods: {
            saveNewTodo: function(){
                this.todo_list.push();
                this.newTodo = "";
            },
        }
    })
})