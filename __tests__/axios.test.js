const axios = require('../app/axios');

describe('Axios  Lib', () => {
    test('get users', async () => {
        await axios.getUsers();
    })
})