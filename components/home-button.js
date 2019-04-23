class HomeButton extends HTMLElement {

	constructor() {
		super();
		this.root = this.attachShadow({mode: 'open'});

		this.root.innerHTML = `
			<button class="btn btn-primary">Home</button>
		`;
	}

	connectedCallback() {
		this.addEventListener('click', () => {
			document.querySelector('news-articles').innerHTML = "";
			this.fetchNews();
		});
	}

	async fetchNews() {
		const apiKey = '9fe204f5d40a49328dd06dd2b04c6037';
		const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + apiKey;

		const res = await fetch(topHeadlinesUrl);
		const json = await res.json();

		const main = document.querySelector('news-articles');

		json.articles.forEach(article => {
			const el = document.createElement('news-article');
			el.article = article;
			main.appendChild(el);
		});
	}

}

customElements.define('home-button', HomeButton);