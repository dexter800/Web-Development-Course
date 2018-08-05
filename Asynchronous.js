// Introducing Web Browesre API/ Node background treat 

function printHello () { 
    console.log("Hello World!")
}
setTimeout(printHello, 1000); //fraud function 
console.log("Me first!"); 

// 
function printHello() {
    console.log("Hello"); 

}
function blockForSec() {
}
setTimeout(printHello,0); 
blockForSec()
console.log("Me first!");




// two-pronged "facade" function 
function display(data) {
    console.log(data);
}

const futureData = fetch("https://twitter.com/will/tweats/1"); 

futureData.then(display); // 
console.log("Me first!"); 

//javascript Promise-deffered functionality gets back into javascript to be run 

function display(data) {console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300ms(){}

setTimeout(printHello, 0); 
const futureData = fetch("https://twitter.com");
futureData.then(display)

blockFor300ms()

console.log("Me first"); 
