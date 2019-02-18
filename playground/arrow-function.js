//arrow function for a single statement and single argument
var square = x => x*x;

//this does the same as the above function
// var square = (x) => {
//     return x*x;
// };

console.log(square(9));


var user = {
    name : 'Amit',
    sayHi : () => { //first issue: arrow function do not bind a 'this' keyword
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {   //this is how we solve the above problem. This is an ES6 feature.
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();