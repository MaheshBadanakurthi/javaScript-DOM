document.getElementById("toChangeHead").style.backgroundColor="navy";
document.getElementById("eventFunction").addEventListener("dblclick", blockAChange);
function blockAChange(){
    document.getElementById("blockA").style.backgroundColor="green";
    document.getElementById("blockA").style.color="white";

}
document.getElementById("eventFunction").addEventListener("click", blockBChange);

function blockBChange(){
    document.getElementById("blockB").style.backgroundColor="red";
    document.getElementById("blockB").style.color="white";
    alert("you are going to see som echanges")

}

document.getElementById("eventFunction").addEventListener("click", DateCome);

function DateCome(){
    document.getElementById("forDate").innerHTML=Date();
    alert("You are going to see Date now")


}
document.getElementById("eventFunction").addEventListener('click',function(){
    document.getElementById('blockD').style.color='green';
    document.getElementById('blockD').style.backgroundImage='linearGradient(to left,red,yellow)'
},false)

