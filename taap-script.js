


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
    var p1 = btn.parentElement;
    var p2 = p1.parentElement;
    var p3 = p2.parentElement;
    var cBB = p3.children[1];

    console.log(cBB);

    btn.addEventListener('click', ()=>{
        p3.classList.toggle('active');
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



var menues = document.querySelectorAll('.menu > a.link');
console.log(menues);

menues.forEach((menu, i)=>{

    console.log();

    menu.addEventListener('click', (e)=>{

        menu.classList.toggle('active');
        menues.forEach((menu, j)=>{
            if(i != j){
                menu.classList.remove('active');
            }

        })

    })
});