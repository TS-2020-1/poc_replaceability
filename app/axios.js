const axios = require('axios');
 

const getUsers = async () => {
    //const res = await axios.get('https://api.github.com/users/miguelpimentel');
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    console.log(res.data);

    return res.status;
}

getUsers();

module.exports ={
    getUsers
}
