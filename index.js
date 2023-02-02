let thome=document.getElementById("total-home-el");
let taway=document.getElementById("total-away-el");
let shome=0;
let saway=0;

function addthree(){
    shome +=3;
    thome.textContent=shome;
}
function  addtwo(){
    shome+=2;
    thome.textContent=shome;
}
function  addone(){
    shome+=1;
    thome.textContent=shome;
}
function addthreeguest(){
    saway +=3;
    taway.textContent=saway;
}

function addtwoguest(){
    saway +=2;
    taway.textContent=saway;
}
function addoneguest(){
    saway +=3;
    taway.textContent=saway;
}