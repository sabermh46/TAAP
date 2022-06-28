


var cardsbtn = document.querySelectorAll('.collapseable-card > .card-controll > .buttons > .up-down');
var crossbtns = document.querySelectorAll('.collapseable-card > .card-controll > .buttons > .cross');

console.log(cardsbtn);
cardsbtn.forEach((btn, i)=>{
    var cardBody = document.querySelector(`.collapseable-card:nth-child(${i+2})`);
    console.log(cardBody);
    btn.addEventListener('click', ()=>{
        cardBody.classList.toggle('active');
    })
})

crossbtns.forEach((btn, i)=>{
    var cardBody = document.querySelector(`.collapseable-card:nth-child(${i+2})`);
    btn.addEventListener('click', ()=>{
        cardBody.remove();
    })
})