'use strict'

let article=[];
let autherArray=['ID', 'title' , 'date' ,'name' , 'subject' ];
let totalArticles=0;
let article1=document.getElementById('article');
let textarea=document.getElementById('output');
let form=document.getElementById('form')



function Auther(autherName , autherTitle  , dayOfArticle , content){
    this.autherName=autherName;
    this.autherTitle=autherTitle;
    this.dayOfArticle=dayOfArticle;
    this.content=content;
    this.name='';
    this.like=0;
    this.ID=1;

    this.imge=`${asac_ltuc}.jpg`;
    article.push(this);
}

function calaTotalArticle (){
    for(let i =0 ; i<article.length ; i++){
        totalArticles=article[i].totalArticles;
    }
    return totalArticles;
}

Auther.prototype.generatAutherID = function(){
    for(let i=0 ; i<article.length ;i++ ){
        this.ID;
    }
}

Auther.prototype.ArticleTitle=function(){
     for(let i=0 ; i<article.length ;i++ ){
         this.autherTitle=article[i].autherTitle;
     }
}

Auther.prototype.NumberOfLikes=function(){
    this.like=Math.floor(Math.random()* (500 - 1 )+1);
}


function creatArticle (){
    let articleContant =document.createElement('p');
    article.appendChild(articleContant);
for (let i=0 ; i<autherArray.length ;i++){
    let par=document.createElement('article');
    articleContant.appendChild(par);
    par.textContent=autherArray[i];
}
}
creatArticle();
getart();

function render(){
for(let i=0 ; i<article.length ; i++){
    let parEl=document.createElement('article');
    article1.appendChild(parEl);


   let idEl=document.createElement('p');
   parEl.appendChild(idEl);
   idEl.textContent=article[i].ID;



   let titaleEl=document.createElement('p');
   parEl.appendChild(tittleEl);
   titaleEl.textContent=article[i].autherTitle;


   let nameEl = document.createElement('p');
   parEl.appendChild(nameEl);
   nameEl.textContent=article[i].autherName;


   let dayEl=document.createElement('p');
   parEl.appendChild(dayEl);
   dayEl.textContent=article[i].dayOfArticle;

   let contentEl=document.createElement('p');
   parEl.appendChild(contentEl);
   contentEl.textContent=article[i].content;

   let likesEl=document.createElement('p');
   parEl.appendChild(likesEl);
   likesEl.textContent=article[i].like;

}

}


form.addEventListener('submit' , ViewArticle)

function ViewArticle(event){
    event.preventDefault();
    article1.textContent='';
    creatArticle();

  let name=event.target.autherName.value;
  let titale=event.target.articletitle.value;
  let subject=event.target.subject.value;

  let addview= new Auther(name , titale , subject)
  addview.generatAutherID();
  addview.ArticleTitle();
  addview.NumberOfLikes();
render();
saveArticle();
calaTotalArticle();
totalArticles.textContent="total"+ totalArticles;
}


function saveArticle(){
    localStorage.setItem('art',JSON.stringify(article));
}

function getart(){
    let get = localStorage.getItem('art');
    if (get){
        totalArticles=0;
        article=JSON.parse(localStorage.getItem('art'));
    }
    render();
}
