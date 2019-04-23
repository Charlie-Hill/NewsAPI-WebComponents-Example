class ViewArticle extends HTMLElement {

	constructor() {
		super();
		this.root = this.attachShadow({mode: 'open'});
	}

	set article(article) {
		this.root.innerHTML = `
			<style>
				.article {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 90%;
				}
				.article .image img {
					width: 300px;
				}
			</style>
			<div class="article">
				<home-button></home-button>
				<div class="header">
					<h3>${article.title}</h3>
				</div>
				<div class="image">
					<img src="${article.urlToImage}">
				</div>
				<div class="body">
					${article.description} | View the full article <a href="${article.url}">here</a>
				</div>
			</div>
		`;
	}
}

customElements.define('view-article', ViewArticle);