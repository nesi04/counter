let num =document.getElementById("label");
let dis=0;
num.textConten=`${dis}`;
document.getElementById("inc").onclick=function(){
    dis+=1;
    num.textContent=`${dis}`;
}
document.getElementById("dec").onclick=function(){
    dis-=1;
    num.textContent=`${dis}`;
}
document.getElementById("res").onclick=function(){
    dis=0;
    num.textContent=`${dis}`;
}