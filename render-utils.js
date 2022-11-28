export function renderPost(post) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.description;

    const p2 = document.createElement('p');
    p2.textContent = post.contact;

    div.classList.add('object');
    div.append(h3, p, p2);
    return div;
}
