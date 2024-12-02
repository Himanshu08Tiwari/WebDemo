const API_KEY = "8318371124214fd2a1846642af5ded9f";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);

    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById("card-container");
    const cardTemplate = document.getElementById("card-template");

    cardContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = cardTemplate.content.cloneNode(true);
        fillDataInCard(article, cardClone);
        cardContainer.appendChild(cardClone);
    });
}

function fillDataInCard(article, cardClone) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsHeading = cardClone.querySelector("#news-head");
    const newsSource = cardClone.querySelector("#news-src");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsHeading.innerHTML = article.title;
    newsDesc.innerHTML = article.content;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name}.${date}`;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, '_blank');
    })
}

let currNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    let navItem = document.getElementById(id);
    currNav?.classList.remove("active");
    currNav = navItem;
    currNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.ariaValueMax;
    fetchNews(query);
    currNav?.classList.remove("active");
    currNav = null;
})