


var cardsbtn = document.querySelectorAll('.collapseable-card > .card-controll > .buttons');

console.log(cardsbtn);
cardsbtn.forEach((btn, i)=>{
    var cardBody = document.querySelector(`.collapseable-card:nth-child(${i+2})`);
    console.log(cardBody);
    btn.addEventListener('click', ()=>{
        cardBody.classList.toggle('active');
    })
})