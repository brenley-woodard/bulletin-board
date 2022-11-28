import { addPost, checkAuth } from '../fetch-utils.js';

checkAuth();
const createForm = document.getElementById('form');

// const titleInput = document.getElementById('title');
// const descriptionInput = document.getElementById('description');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(createForm);
    const post = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    await addPost(post);

    location.replace('/bulletin-page');
});
