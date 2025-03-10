const request = async (method, url, data) => {
    let options = {};

    if (method !== 'GET') {
        options = {
            method,
        };
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
};

export default {
    get: request.bind(null, 'GET'),
    // get: (...params) => request('GET', ...params)
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
}
