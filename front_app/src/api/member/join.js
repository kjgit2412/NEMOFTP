import apiRequest from '../../lib/apiRequest';

export const checkUserExists = (userId) => new Promise((resolve, reject) => {
    apiRequest(`/user/exists/{userId}`)
        .then((res) => {
            console.log(res);
            resolve(res);
        })
        .catch((err) => {
            console.log(err);
            reject(err);
        });
});