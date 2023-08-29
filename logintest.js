import { deserialize } from '$app/forms';
let fi = new FormData()
const functions = {
    login: async function login(detail) {
        fi.append('info', JSON.stringify(detail));
        let data = await fetch('http://localhost:5173/Login?/login', { method: 'POST', body: fi });
        let res = deserialize(await data.text());
        return res
    }
}


export default functions