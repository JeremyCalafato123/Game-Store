import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1862597eabb94f708770829c757099a9'
    }
})
