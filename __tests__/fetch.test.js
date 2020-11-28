const fetch = require('../app/fetch');

describe('Fetch', () => {
    test('get users', async () => {
        await fetch.getUsers();
    })
})