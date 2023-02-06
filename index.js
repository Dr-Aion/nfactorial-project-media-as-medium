const articlesFromAPI = [
{
    id: 0,
    src: "./assets/bg.png",
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
            <span id = "autor"></span> in <span id = "section"></span> <span id = "date"></span>
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

// let i = 0;
// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => 
//         data.splice(0, 5).forEach(item => {
//             let newArticle = article.replace(`id = "title">`, `id = "title">${item.title}`);
//             newArticle = newArticle.replace(`id = "summary">`, `id = "summary">${item.body}`);
//             newArticle = newArticle.replace(`src=""`, `src="${articlesFromAPI[i].src}"`);
//             articles.innerHTML += newArticle;
//             i++;
//         })
//         )
//       .catch(e => console.log(e))

async function getTopStories(){
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=PyGpMKp0nji2TLA0PKbRyxOJ9jVNv946')
    if(!response.ok && response.status === '404'){
        console.log('query is not composed right')
    }
    const responseJson = await response.json();
    console.log(responseJson)
    const data = responseJson.results;
    console.log(data)
    data.forEach(item => {
        let newArticle = article.replace(`id = "title">`, `id = "title">${item.title}`);
        newArticle = newArticle.replace(`id = "summary">`, `id = "summary">${item.abstract}`);
        newArticle = newArticle.replace(`id = "autor">`, `id = "autor">${item.byline}`);
        newArticle = newArticle.replace(`id = "section">`, `id = "section">${item.section}`);
        newArticle = newArticle.replace(`id = "date">`, `id = "date">${item.published_date}`);
        let imgSrc = item.multimedia;
        if (imgSrc == null){
            newArticle = newArticle.replace(`src=""`, `src="${articlesFromAPI[0].src}"`);
        }
        else{
            newArticle = newArticle.replace(`src=""`, `src="${imgSrc[0].url}"`);
        }
        articles.innerHTML += newArticle;
    })
}
getTopStories()
