const openSidenav = () => {
    if (document.getElementById("menu-icon").style.display === "block") {
        document.getElementById("menu-icon").style.display = "none";
        document.getElementById("close-icon").style.display = "block";
        document.getElementById("sidenav").style.display = "block";
    } else {
        document.getElementById("menu-icon").style.display = "block";
        document.getElementById("close-icon").style.display = "none";
        document.getElementById("sidenav").style.display = "none";
    }
}
