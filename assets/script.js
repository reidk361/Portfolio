const aboutMeBtn = document.getElementById("about-me-button");
const projectBtn = document.getElementById("project-button");
const digitalArtBtn = document.getElementById("digital-art-button");
const contactBtn = document.getElementById("contact-button");

const aboutMeDiv = document.getElementById("about-me");
const projectDiv = document.getElementById("example-pages");
const digitalArtDiv = document.getElementById("digital-art");
const contactDiv = document.getElementById("contact-info");

function handleAboutMe(){
    aboutMeDiv.setAttribute("style","display:content");
    projectDiv.setAttribute("style","display:none");
    digitalArtDiv.setAttribute("style","display:none");
    contactDiv.setAttribute("style","display:none");
}

function handleProjects(){
    aboutMeDiv.setAttribute("style","display:none");
    projectDiv.setAttribute("style","display:content");
    digitalArtDiv.setAttribute("style","display:none");
    contactDiv.setAttribute("style","display:none");
}

function handleArts(){
    aboutMeDiv.setAttribute("style","display:none");
    projectDiv.setAttribute("style","display:none");
    digitalArtDiv.setAttribute("style","display:content");
    contactDiv.setAttribute("style","display:none");
}

function handleContact(){
    aboutMeDiv.setAttribute("style","display:none");
    projectDiv.setAttribute("style","display:none");
    digitalArtDiv.setAttribute("style","display:none");
    contactDiv.setAttribute("style","display:content");
}

aboutMeBtn.addEventListener("click", handleAboutMe);
projectBtn.addEventListener("click", handleProjects);
digitalArtBtn.addEventListener("click", handleArts);
contactBtn.addEventListener("click", handleContact);