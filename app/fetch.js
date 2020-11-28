const fetch = require('node-fetch');

const getUsers = () => {
    fetch('https://api.github.com/users/miguelpimentel')
    .then(res => res.json())
    .then(json => console.log(json));
}

getUsers();


module.exports ={
    getUsers
}
