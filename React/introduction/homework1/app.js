import axios from "axios";

// created async-await function with user_id parameter.
async function getData(user_id) {
    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
    const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id);

    // return user and post object
    return await { "User": user, "posts": posts }
}

export default getData;