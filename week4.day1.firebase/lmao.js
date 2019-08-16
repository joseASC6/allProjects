const nameElement = document.getElementById("name");
const dateElement = document.getElementById("date");
const messageElement = document.getElementById("text");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event) {
    event.preventDefault();
    const name = nameElement.value;
    const date = dateElement.value;
    const text = messageElement.value;

    usernameElement.value = "";
    messageElement.value = "";

    console.log(username + " : " + message);

    //Update database here
    let obj = {
        Name: name,
        date: date,
        text: text
    };
    database.push(obj);

}