const articlesFromAPI = [
{
    id: 0,
    src: "./assets/Img.png",
},
{
    id: 1,
    src: "./assets/Img-2.png",
},
{
    id: 2,
    src: "./assets/Img-3.png",
},
];

let article = `
<div class="card m-5 border-0 bg-color">
    <div class="row g-0">
        <div class="col-md-9">
            <div class="card-header bg-color border-0">
            <img src="./assets/profile_pic1.webp" class="rounded-circle" alt="Cinque Terre" width="20" height="20"> 
            Author's name in Topics Name 7 july
            </div>
            <div class="card-body bg-color">
                <a href = "article.html"><h2 class="card-title" id = "title"></h2></a>
                <p class="card-text" id = "summary"></p>
            </div>
            <div class="card-footer bg-color text-muted border-0">
                <p><small><div class = "btn">JavaScript</div>   12 min read     Selected for you</small></p>
            </div>
        </div>
        <div class="col-md-3 bg-color">
            <img src="" class="img-fluid rounded-start" alt="article_img">
        </div>
    </div>
</div>`;

let articles = document.getElementById("articles");

let i = 0;
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => 
        data.splice(0, 5).forEach(item => {
            let newArticle = article.replace(`id = "title">`, `id = "title">${item.title}`);
            newArticle = newArticle.replace(`id = "summary">`, `id = "summary">${item.body}`);
            newArticle = newArticle.replace(`src=""`, `src="${articlesFromAPI[i].src}"`);
            articles.innerHTML += newArticle;
            i++;
        })
        )
      .catch(e => console.log(e))
