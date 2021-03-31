var coll = document.getElementsByClassName("collapsible");
var i;
var plus = document.getElementsByClassName("plus");
var moins = document.getElementsByClassName("moins");

for (i = 0; i < coll.length; i++) {
  console.log(plus[i])
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
     
    } else {
      content.style.display = "block";
      // plus[i].style.display = "none";
      // moins[i].style.display="inline";

    }
  
  });
}