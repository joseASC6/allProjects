const nameElement = document.getElementById("name");
const dateElement = document.getElementById("date");
const messageElement = document.getElementById("text");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);



// Set database "child_added" event listener here
database.on("child_added", addMessage);

const msgContainer = document.querySelector(".allMessages");
function addMessage(rowData) {
    const row = rowData.val();
    const name = row.user;
    const message = row.msg;

    const pELement = document.createElement("p");
    pELement.innerText = `${name}: ${message}`;
    msgContainer.appendChild(pELement);
}