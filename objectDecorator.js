

// lets refactor code 


var carLike = function(obj, loc) {
    obj.loc = loc; 
    obj.move = function () {
        obj.loc++;
    };
    return obj; 
}; 
var amy = {
    log: 1
};
amy.move();

var ben = {
    loc: 9
};
ben.move();

//Javascript Class 

var Car = function (loc) {
    var obj = {loc: loc}; 
    obj.move = move; 
    return obj;
};

var move = function () {
    this.loc++;
}; 

var amy = Car(1); 
amy.move(); 
var ben = Car(9); 
ben.move(); 

// Prototypal Class 

var Car = function(loc) {
    var obj = object.create(Car.prototype); 
    obj.loc = loc; 
    return obj; 

}; 
Car.prototype.move = function () {
    this.loc++;
}; 
console.log(Car.prototype.constructor); 
console.log(amy.constructor); 
log(amy instanceof Car);

// pseudoclassical patterns 