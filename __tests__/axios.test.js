const axios = require('../app/axios');

describe('Axios  Lib', () => {
    test('get users', async () => {
        expect.assertions(1);
        const ans = await axios.getUsers();
        console.log(ans);

        expect(ans).toBe(200);
    })
})