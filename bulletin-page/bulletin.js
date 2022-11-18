import { fetchPost, checkAuth } from '../fetch-utils.js';
import { renderPost } from '../render-utils.js';

const createButton = document.getElementById('create');
const postContainer = document.getElementById('bulletin-board');

checkAuth();

createButton.addEventListener('click', () => {
    location.replace('/create-page');
});
window.addEventListener('load', async () => {
    const posts = await fetchPost();
    for (let post of posts) {
        const postEl = renderPost(post);
        postContainer.append(postEl);
    }
});
