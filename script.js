const bt2 = document.getElementById("bt2");
const bt1 = document.getElementById("bt1");


bt2.onmouseover = function() {
    
    let position =  Math.floor(Math.random() * 100);
 document.getElementById("bt2").style=`position:absolute;left:${position}%;`
  };

bt1.addEventListener("click", function() {
  setTimeout(function(){
    window.location.reload();
 }, 3000);
    document.getElementById("image").style="width:20%;"
document.getElementById("text").innerHTML = "I knew it ;)"
  });

