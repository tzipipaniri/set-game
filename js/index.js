document.getElementById("rules").addEventListener("click",goToRules);
function goToRules(){
    window.open("html/rules.html", "_self");
}








// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("game").addEventListener("click",startGame);
function startGame(){
    document.getElementById('id01').style.display='block';
   document.querySelector("input[name=uname]").value="";

}
document.querySelector("button[type=submit]").addEventListener("click",SaveName);

function SaveName(){
   localStorage.setItem("name",document.querySelector("input[name=uname]").value);
}