const axios = require('axios');
 

const getUsers = () => {
    axios.get('https://api.github.com/users/miguelpimentel')
    .then(function (response) {
    // handle success
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
}

getUsers();

module.exports ={
    getUsers
}
