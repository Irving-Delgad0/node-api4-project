module.exports = {
    getAll,
    register,
    login
}

const USERS = [];

async function getAll() {
    return USERS;
}

async function register(object) {
    USERS.push(object)
    return object
} 

async function login(object) {
    return USERS;
}