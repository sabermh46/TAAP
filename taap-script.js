


var cardsbtn = document.querySelectorAll('.collapseable-card > .card-controll > .buttons > .up-down');
var crossbtns = document.querySelectorAll('.collapseable-card > .card-controll > .buttons > .cross');

var totalBt = cardsbtn.length;
var ht = [];
var clicked = [];
for(var j=0; j<=totalBt; j++)
{
    clicked[j] = 0;
}
var cB = document.querySelectorAll('.collapseable-card .card-body');
    cB.forEach((body, i) =>{
        var height = body.offsetHeight;
        body.style.height = `${height}px`;
        ht[i] = height;
        console.log(ht[i]);
    })


cardsbtn.forEach((btn, i)=>{
    var cardBody = document.querySelector(`.collapseable-card:nth-child(${i+2})`);
    var cBB = document.querySelector(`.collapseable-card:nth-child(${i+2}) > .card-body`);


    btn.addEventListener('click', ()=>{
        cardBody.classList.toggle('active');
        if(++clicked[i]%2) {
            cBB.style.height = '0px';
        }
        else {
            cBB.style.height = `${ ht[i] }px`;
        }
    })
})



crossbtns.forEach((btn, i)=>{
    var cardBody = document.querySelector(`.collapseable-card:nth-child(${i+2})`);
    btn.addEventListener('click', ()=>{
        cardBody.remove();
    })
})