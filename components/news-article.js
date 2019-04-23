class NewsArticle extends HTMLElement {

	constructor() {
		// When defining a constructor, always call super()
		// It is required by the spec
		super();

		// Attach the shadow DOM
		// The shadow DOM allows a scoped DOM tree that is attached to the element
		// But separate from the children
		// Anything added in the shadows becomes local to the host element (e.g. <style>)
		this.root = this.attachShadow({mode: 'open'});		
	}

	set article(article) {
		this.root.innerHTML = `
			<style>
				.article {
					width: 250px;
					display: inline-block;

					border: solid 1.5px black;
					border-radius: 4px;
					text-align: center;

					padding: 5px;
					margin-left: 5px;
					margin-bottom: 10px;

					cursor: pointer;
				}
				.article:hover {
					background-color: #d7d7d7;
				}
				.article:first-child {
					margin-left: 0;
				}
				.article img {
					width: 100%;
				}
			</style>
			<div class="article">
				<div href="${article.url}">
					<h2>${article.title}</h2>
					<img src="${article.urlToImage || ''}">
					<p>${article.description || ''}</p>
				</div>
			</div>
		`;

		this.addEventListener('click', () => {
			const main = document.querySelector('news-articles');
			main.innerHTML = "";

			const el = document.createElement('view-article');
			el.article = article;
			main.appendChild(el);
		});
	}

}

customElements.define('news-article', NewsArticle);