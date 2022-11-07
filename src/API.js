import axios from 'axios';

export default axios.create({
    baseURL: "https://strapi-production-f824.up.railway.app/api/projects",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})