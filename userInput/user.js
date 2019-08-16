const button = document.getElementById("submitButton");
button.addEventListener("click", clickListener);
function clickListener(e){
    e.preventDefault();
    const userInput = document.getElementById("firstName");
    const name = userInput.value;
    alert(name);
    userInput.value = "";
}