const banner =document.getElementsByClassName('banner')[0];
const blocks =document.getElementsByClassName('blocks');

for(var i=1; i< 400;i++){
    banner.innerHTML +="<div class='blocks'></div>";
    const duration=Math.random()*5;
    blocks[i].style.animationDuration = 2+duration+'s';
    blocks[i].style.animationDelay = duration+'s';
   
}
const section = document.querySelector('section');
setInterval(function(){
    section.classList.add('active')
},14000)