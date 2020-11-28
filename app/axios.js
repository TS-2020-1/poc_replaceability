const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com';
const body = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};
 
// Get HTTP Success

const getResponseData = async () => {
    const res = await axios.get(`${url}/posts/1`);
    return res.data;
}

const putResponseData = async () => {
    const res = await axios.put(`${url}/posts/1`, body);
    return res.data;
}

const postResponseData = async () => {
    const res = await axios.post(`${url}/posts/1`);
    return res.data;
}

const patchResponseData = async () => {
    const res = await axios.patch(`${url}/posts/1`, body);
    return res.data;
}

const deleteResponseData = async () => {
    const res = await axios.delete(`${url}/posts/1`, body);
    return res.data;
}

// Get HTTP Failure

const getResponseDataFailure = async () => {
    const res = await axios.get(`${url}/posts/101`);
    return res.data;
}

const putResponseDataFailure = async () => {
    const res = await axios.put(`${url}/posts/101`, body);
    return res.data;
}

const postResponseDataFailure = async () => {
    const res = await axios.post(`${url}/posts/101`);
    return res.data;
}

const patchResponseDataFailure = async () => {
    const res = await axios.patch(`${url}/posts/101`, body);
    return res.data;
}

const deleteResponseDataFailure = async () => {
    const res = await axios.delete(`${url}/posts/101`, body);
    return res.data;
}

// Get HTTP content

const getStatusCode = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.status;
}

const getHTTPMethod = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.config.method;
}

const getHeaders = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.config.headers;
}

const getResponseUrl = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.config);
    return res.config.url;
}

module.exports = {
    getStatusCode,
    getHTTPMethod,
    getHeaders,
    getResponseUrl,
    getResponseData,
    putResponseData,
    patchResponseData,
    postResponseData,
    deleteResponseData
}
