

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
