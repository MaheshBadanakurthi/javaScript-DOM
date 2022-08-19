function itsFun(s){
    s.innerHTML="Its gone"
    document.getElementById("ss").style.color="red";
    document.getElementById("ss").style.backgroundColor="yellow";
}
function dt(){
    document.getElementById("tr6").innerHTML=Date();
}

function mouseOnButton(){
    let cursorOnMe= document.getElementById("mouseOnbutton");
    cursorOnMe.innerHTML="Your mouse/cursor is on me";
    cursorOnMe.style.color="green";
}

function mouseGetdown(){
  let offHover=  document.getElementById("mouseGetout");
    offHover.innerHTML="Your mouse out from me";
    offHover.style.color="yellow";
}

function mouseOnClick(){
   let  clickButton =document.getElementById("mouseClicked");
   clickButton.innerHTML=" You just clicked on button";
   clickButton.style.color="navy"
  
}