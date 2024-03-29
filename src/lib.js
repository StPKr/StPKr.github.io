// import { render, html } from '../node_modules/lit-html/lit-html.js';
// import page from '../node_modules/page/page.mjs';
import { render, html } from '../lit-html/lit-html.js';
import page from '../page/page.mjs';

const root = document.querySelector('main');

function renderer(templateResult) {
    render(templateResult, root);
}
export {
    renderer,
    html,
    page
}