import axios from "axios";

const getUser = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}