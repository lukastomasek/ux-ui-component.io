let nav;
let ul;
let $li = [];
let progressBar;
let innerBar;
let headingsBar;
let innerHBar;
let gizmoTxt;
let $loadingGif;
let loadingTxt;
let loadedNewContent = false;
let $allHeadings = document.querySelectorAll('h1 ,h2,h3,h4,h5,h6');
// scroll in view{behaviour:smooth}
//#region  Functions
 function addTableOfContents(){

   nav = document.createElement('div');
   nav.setAttribute('class','navbar');
   document.body.appendChild(nav);
   ul = document.createElement('ul');
   loadingTxt = document.createElement('p');
   loadingTxt.setAttribute('class', 'loading-text')
   loadingTxt.innerHTML = "LOADING CONTENT"
   ul.setAttribute('class','nav-items');
   nav.appendChild(ul);
   gizmoTxt = document.createElement('p');
   gizmoTxt.innerHTML = "TABLE OF CONTENTS";
   nav.prepend(gizmoTxt);
   $loadingGif = document.createElement('div');
   $loadingGif.innerHTML =
    `<img class =loading src="img/Spinner-1s-200px.gif" alt="loading gif">`;

   nav.appendChild($loadingGif);
   nav.appendChild(loadingTxt)
   for(let i = 0; i < $allHeadings.length; i++){
     $li[i] = document.createElement('li');
     $li[i].setAttribute('class','nav-links');
     $li[i].innerText += `${$allHeadings[i].innerText}`;
     ul.appendChild($li[i]);   
     $li[i].style.fontSize = "0.5em"; 
   }

   progressBar =document.createElement('div');
   progressBar.setAttribute('class','myProgress');
   nav.appendChild(progressBar);
   innerBar = document.createElement('div');
   innerBar.setAttribute('class','myBar');
   progressBar.appendChild(innerBar);
   

  //nav.insertAdjacentHTML("beforeend",content);

 }

 function addStyling(){ 
   nav = document.querySelector('.navbar');
   progressBar = document.querySelector('.myProgress');
  innerBar =document.querySelector('.myBar');

   nav.style.top = '0';
   nav.style.width = "5rem";
   nav.style.height = "100vh";
   nav.style.position = "fixed";
   nav.style.backgroundColor = "#262626"
   nav.style.transition = "210ms" + "ease";

   progressBar.style.width = '4.5rem';
   progressBar.style.marginTop = '1em';
   progressBar.style.height = '20px';
   progressBar.style.backgroundColor ='lightgray';
   progressBar.style.position = 'fixed';
   progressBar.style.top = '15';
   progressBar.style.left = '0';
   progressBar.style.transition = "210" + "ease";
   progressBar.style.boxShadow = "3px" + "3px" + "5px" +"gray";

   innerBar.style.width = '10%';
   innerBar.style.height = '20px';
   innerBar.style.backgroundColor = 'lightgreen';
   innerBar.style.transition = "200" +"ease";

 }

 function hover(){
   nav.style.width = '16rem';
   progressBar.style.width = '15.5rem';
   $loadingGif.style.paddingLeft = '1em';
   $loadingGif.style.transition = '100'+'ease';
   for(let i = 0; i < $li.length; i++){
     $li[i].style.fontSize = '1em';
   }
   document.body.style.cursor =  'pointer';
  }

 function unHover(){
   progressBar.style.width = '4.5rem';
   nav.style.width = '5rem';
   $loadingGif.style.paddingLeft = '0em';

   for(let i = 0; i < $li.length; i++){
   $li[i].style.fontSize = '.5em';  
  }

  document.body.style.cursor = 'cursor;'
  }

 addTableOfContents();

 addStyling();

  //#endregion


document.querySelector('.navbar').addEventListener('mouseover', hover);
document.querySelector('.navbar').addEventListener('mouseleave', unHover);

window.addEventListener('scroll', event =>{
   let doc = document.documentElement;
   let documentH = doc.scrollHeight;
   let windowH = doc.clientHeight;
   let scrollY = window.scrollY;
   let canBeScrolled = documentH -  windowH;

   let result = (scrollY/canBeScrolled) * 100;
   result = Math.floor(result);
   checkHViewPort();

   let $loadGif  = document.querySelector('.loading');
   let $loadTxt = document.querySelector('.loading-text'); 
  
  
   if(result >= 70){
    $loadGif.style.display = 'block'
    $loadTxt.style.display = 'block'
   
  }
  else{
    $loadGif.style.display = 'none'
    $loadTxt.style.display = 'none'
  }

  if(result >= 90){
    document.querySelector('.body').innerHTML += 
    document.querySelector('.products').innerHTML;
    loadedNewContent = true;
  }
  
  if(loadedNewContent){
    let updateBar= 0;
    innerBar.style.width = "0" + "%";
    loadedNewContent = false;

  }

  if(!loadedNewContent)
    innerBar.style.width = result + "%";

   innerBar.style.color = 'white';

})

function checkHViewPort(){

  $li.forEach($H =>{
    let seen = false

    if(scrollY >= $H.offsetTop && $H.offsetTop +  $H.scrollHeight){
        seen = true
    }
    else{
     seen = false
    }

    if(seen){
      $H.style.color = 'lightskyblue'
    }
    else if(!seen){
      $H.style.color = 'lightslategray'
    }
    
  })}

