const yourName = prompt("What is your name?");
const error = "If you don't enter your name, it will not affect the website's functionality. But for a more personalized experience, please refresh the page and enter your name.";
const userNameEl = document.querySelector("h1");

if(yourName){
    userNameEl.textContent = yourName + ",";
    } else {
        alert(error);
}
