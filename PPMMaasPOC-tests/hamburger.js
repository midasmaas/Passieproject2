let navbarToggled = false;

document.addEventListener("DOMContentLoaded", (e) => {

    let navbarButtonsContainer = document.getElementsByClassName("navbar-buttons")[0];

    let hamburgermenu = document.getElementsByClassName("btn-navbar-toggle")[0];
    let origBGColor = hamburgermenu.style["background-color"];

    hamburgermenu.addEventListener("click", (e) => {
        navbarToggled = !navbarToggled;
        if(navbarToggled){
            navbarButtonsContainer.style["display"] = "flex";
        }else{
            navbarButtonsContainer.style["display"] = "none";
        }
    });
});