class SearchBar extends HTMLElement {

	constructor() {
		super();
		this.root = this.attachShadow({mode: 'open'});

		this.root.innerHTML = `
			<style>
				input[type="text"] {
					border: solid 1.25px grey;
					border-radius: 4px;
					padding-top: 5px;
					padding-bottom: 5px;
					width: 100%;
					font-size: 20px;
					margin-bottom: 10px;
				}
			</style>
			<div>
				<input type="text" placeholder="Search News" id="search" />
			</div>
		`;
	}

	connectedCallback() {
		this.addEventListener('keyup', () => {
			this.searchQuery = this.shadowRoot.querySelector('#search').value;
			this.search(this.searchQuery);
		});
	}

	async search(query) {

		const apiKey = '9fe204f5d40a49328dd06dd2b04c6037';
		let searchAPIUrl = 'https://newsapi.org/v2/everything?q='+query+'&apiKey=' + apiKey;

		const res = await fetch(searchAPIUrl);
		const json = await res.json();

		const main = document.querySelector('news-articles');
		main.innerHTML = "";

		json.articles.forEach(article => {
			const el = document.createElement('news-article');
			el.article = article;
			main.appendChild(el);
		});

	}

}

customElements.define('search-bar', SearchBar);