const fetch = require('../app/fetch');

describe('Test HTTP GET', () => {
    test('get users', async () => {
        expect.assertions(1);
        const sut = await fetch.getResponseData();
        console.log(sut);

        let mock = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }

        expect(sut.data).toBe(mock);
    })
})
