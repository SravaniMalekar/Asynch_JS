// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

//one line function does not need braces
// const sayHello = () => console.log('Hello');

//one line retuns
// const sayHello =() => 'Hello';
//same as above
// const sayHello = function(){
//     return 'Hello';
// }

///return object
// const sayHello = () => ({ msg: 'Hello'})

//single param does not need paranthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need paranthesis
// const sayHello = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('BRAD','SCHIFF');

const users = ['Nathan', 'John' , 'william'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//Short
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);