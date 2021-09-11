const getUsers = () => {
    const url = "https://jsonplaceholder.typicode.com";
    return fetch(url + "/users").then(value => value.json())
}
export {getUsers}