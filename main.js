const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Terminare Web App',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Fare il bucato',
                completed: true,
            },
        ],
        newTodo: '',
        filterActive: false,
    },
    computed: {
        completedTodos() {
            const completed = this.todos.filter( todo => todo.completed);
            return completed.length;
        },
    },
    methods: {
        addTodo() {
            if (this.newTodo !== '') {

                
                this.todos.unshift({
                    text: this.newTodo,
                    completed: false,});
                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);           
        },
        updateStatus(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
        toggleFilter() {
            this.filterActive = !this.filterActive;
        },
    }
});