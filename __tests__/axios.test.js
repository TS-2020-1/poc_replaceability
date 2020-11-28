const axios = require('../app/axios');

describe('Test HTTP GET', () => {
    test('Test get data', async () => {
        // expect.assertions(1);
        const sut = await axios.getResponseData();

        let mock = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }

        console.log(sut);
        // expect(sut).toEqual(mock);
    })
})
