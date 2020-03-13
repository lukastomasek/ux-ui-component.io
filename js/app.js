let nav;
let ul;
let li = [];
var _allHeadings = document.querySelectorAll('h1 ,h2,h3,h4,h5,h6');

 function addGizmo(){
   nav = document.createElement('div');
   nav.setAttribute('class','navbar');
   document.body.appendChild(nav);
   ul = document.createElement('ul');
   ul.setAttribute('class','nav-items');
   nav.appendChild(ul);

   for(let i = 0; i < _allHeadings.length; i++){
     li[i] = document.createElement('li');
     li[i].setAttribute('class','nav-links');
     li[i].innerText += `${_allHeadings[i].innerText}`;
     ul.appendChild(li[i]);   
     li[i].style.fontSize = "0.5em"; 
   }
   
  //nav.insertAdjacentHTML("beforeend",content);

 }

 function addStyling(){ 
   nav = document.querySelector('.navbar');
   nav.style.top = '0';
   nav.style.width = "5rem";
   nav.style.height = "100vh";
   nav.style.position = "fixed";
   nav.style.backgroundColor = "#262626"
   nav.style.transition = "210ms" + "ease";
 }

 function hover(){
   nav.style.width = '16rem';
   for(let i = 0; i < li.length; i++){
     li[i].style.fontSize = '1em';
   }
   document.body.style.cursor =  'pointer';
  }
 function unHover(){
   nav.style.width = '5rem';
   for(let i = 0; i < li.length; i++){
    li[i].style.fontSize = '.5em';  
  }

  document.body.style.cursor = 'initial;'
  }


 addGizmo();
 addStyling();

document.querySelector('.navbar').addEventListener('mouseover', hover);
document.querySelector('.navbar').addEventListener('mouseleave', unHover);



