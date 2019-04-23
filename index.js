import './components/news-article.js';
import './components/view-article.js';
import './components/search-bar.js';
import './components/home-button.js';

import {apiKey, topHeadlinesUrl} from './api.js';

window.addEventListener('load', () => {

	fetchNews();

});

async function fetchNews() {
	const res = await fetch(topHeadlinesUrl);
	const json = await res.json();

	const main = document.querySelector('news-articles');

	json.articles.forEach(article => {
		const el = document.createElement('news-article');
		el.article = article;
		main.appendChild(el);
	});
}
