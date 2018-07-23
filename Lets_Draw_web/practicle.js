var toDo = ['item1', 'item2', 'item3', 'iteam4']; 
toDo.push('item5'); 
toDo.splice(0,1); 


// Concept of function 
//Think function like sandwitch
function  makeSandwich () {
    'get slice ofbread';
    'Add Chicken'; 
    'Put a slice of bread on top'; 

}
makeSandwich(); 


// 
function sayHiTO(person) {
    console.log('hi', person); 
}
sayHiTO('Gordon'); 

function greetingtoPeople(person) {
    console.log("Welcome to my House",person, '.'); 
}
greetingtoPeople('Dave')



// function Structure 

var todos = [ 'item1', 'item2', 'item3']; 

//it Should have a function to display todods
function    displayTodos () {
    console.log('My todos:',todos);
}

//it should have function to add todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos(); 

}

// It should have function to changed todos. 
function changeTodo (position, newValue) {
    todos[position] = newValue; 
    displayTodos(); 
}

function deleteTodo (position) {
    todos.slice(position,1); 
    displayTodos(); 
}

// Relation between varlable and function 

var myName = 'Gordon'; 
function  sayName () {
    var secret = 'Watchout';  
    console.log(myName); 
}
sayName(); //'Gordon'

console.log(secret); // error: 'you can't acess value inside function from outside. 


// This concept in object 

 var prati = { 
     name: 'Prati', 
     sayName : function () {  // sayName is method here. 
        console.log(this.name);
        }
}

