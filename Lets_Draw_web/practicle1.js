var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function () {
        console.log('My Todos:', this.todos);
      }, 
      addTodo: function (todo) {
          this.todos.push(todo); 
          this.displayTodos();
      }, 
      chnageTodo: function(position, newValue){
      this.todos[postion] = newValue; 
      this.displayTodos(); 
      }, 
      deleteTodo: function(postion) {
          this.todos.splice(postion,1); 
          this.displayTodos(); 
      }, 
      deleteTodo: function(position) {
          this.todos.splice(position, 1); 
          this.displayTodos(); 
      },
      toggleCompleted: function(position) {
          var todo = this.todos[position]; 
          todo.completed = !todo.completed; 
          this.displayTodos(); 

      }
    };


