// lets store the user data in function 
let user1 = { 
    name: "Will", 
    score: 3, 
    increment: function() {
        user1.score++;
    }
}; 

//Alternative way to create object 
let user2 = {}; 
user2.name = "Tim"  ;
user2.score = 6; 
user2.increment = function() {
    user2.score++; 

}; 

//Another method to creat object 
let user3 = object.create(null); 
user3.name = "Prati"; 
user3.score = 5;
user3.increment = function () {
    user3.score++; 
}; 
// We are breking DRY method, what if we have million usre? 
//Lets solve this problem using function to creat object 

function userName(name, score) {
    let newUser = {}; 
    newUser.name = name; 
    newUser.score = score; 
    newUser.increment = function () {
        newUser.score++;
    }
return newUser;
}; 

let user1 = userName("Sarita", 6); 
user1.increment(); 

//Each time we create new user we make space in computer memory
//for all our data and function . Is there better sol?

function userName(name, score) {
    let newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

let userFunctionStore = {
    increment: function () {this.score++;},
    login: function () {console.log("You are Loggedin");}
};
let user1= userName("Ram", 4); 
let user2=userName("Hari",3); 
user1.increment;


// Introduction of new key Word "new"
    
function User(name, score) {
    this.name = name; 
    this.score = score; 
}
User.prototype.increment = function() {this.score++;}; 
User.prototype.login = function () {console.log("login");}; 

let user1 = new User("ram",4);

// We are writing out shared method seperately for our user 
//object 'constructor' itself( off in the usre.prototype object)

//The class 'Syntactic sugar' 
class User  {
    constructor (name,score) {
        this.name = name; 
        this.score = score; 
    }
    increment () {
        this.score++; 
    }
    login () {
        console.log("login");
    }
}
 let user1 = new User("Prati",2);
 user1.increment(); 