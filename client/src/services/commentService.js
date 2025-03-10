import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, gameId, comment) {
        return request.post(baseUrl, { email, gameId, comment });
    }
};
