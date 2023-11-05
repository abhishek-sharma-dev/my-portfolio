let aboutDetails = document.getElementsByClassName("detail-title");

let aboutDetailContents = document.getElementsByClassName("about-detail-content");

function openAboutDetailContent(detail) {
    for (const aboutDetail of aboutDetails) {
        aboutDetail.classList.remove('active-link')
    }
    
    for (const aboutDetailContent of aboutDetailContents) {
        aboutDetailContent.classList.remove('active-content')
    }
    event.target.classList.add('active-link')
    document.getElementById(detail).classList.add('active-content')
}

function openMenu() {
    let sidemenuBar = document.getElementById("sidemenu-bar")
    sidemenuBar.style.right = '0'

}
function closeMenu() {
    let sidemenuBar = document.getElementById("sidemenu-bar")
    sidemenuBar.style.right = '-200px'

}

function seeMoreProject() {
    alert("More project will be add soon")
}
