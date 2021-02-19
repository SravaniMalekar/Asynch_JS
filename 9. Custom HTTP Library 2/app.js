const http = new EasyHTTP();

//Get users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johe@gmail.com'
}

// // //post 
// const users = http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// //update post
// const users = http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


const users = http.delete('https://jsonplaceholder.typicode.com/users/2',data)
.then(data => console.log(data))
.catch(err => console.log(err));
