
function displayMenu() {
    document.getElementById("sideMenu").style.display = "flex";
}

function hideMenu() {
    document.getElementById("sideMenu").style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        delay: 0,
        duration: 500,
        once: true
    });
});