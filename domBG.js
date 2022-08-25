 document.body.style.backgroundColor="red";  // giving color to body
    document.getElementById('s2').style.color='navy';  //giving color to text
    document.getElementById('s2').style.border="2px solid black"; // giving border
    document.getElementById('s2').style.width="200px";
    document.getElementById('s2').style.backgroundColor='yellow';
   function NFunction(){     // using function 
        document.getElementById('s2').style.color='white';
        document.getElementById('s3').style.backgroundColor="white";
        document.getElementById('s3').style.border="3px ridge navy";
        document.getElementById('s2').style.fontSize="19px";
        document.getElementById('prt').style.visibility="hidden";   // bu usuing tbhis we can hide the data.


     }
     function show(){  // this function is used to show hidden files.
        document.getElementById('prt').style.visibility="visible";
     }

