const yourName = prompt("What is your name?");
const error = "If you don't enter your name, it will not affect the website's functionality. But for a more personalized experience, please refresh the page and enter your name.";


if(yourName){
    document
        .querySelector("body")
        .innerHTML = "<h1>"+yourName+",</h1>";
    } else {
        alert(error);
}
