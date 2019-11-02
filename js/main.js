const bar = document.querySelector(".status");
const statusBar = () => {
  currentScroll = Math.round((window.scrollY / (document.documentElement.offsetHeight - window.innerHeight)) * 100);
  bar.style.height = currentScroll + "%";
};

window.addEventListener("scroll", statusBar);

/*******************************************************/

var screen = document.querySelector("#two .content");
screen.innerHTML = '<object data="layouts/index.html"/>';

/*******************************************************/

let setMobile = () => {
    document.querySelector('.iphone').style.setProperty('--iphone-width', '300px')
    document.querySelector('.iphone').style.setProperty('margin-left', '-150px')
}

let setTablet = () => {
    document.querySelector('.iphone').style.setProperty('--iphone-width', '630px')
    document.querySelector('.iphone').style.setProperty('margin-left', '-315px')
}

let setDesktop = () => {
    document.querySelector('.iphone').style.setProperty('--iphone-width', '1016px')
    document.querySelector('.iphone').style.setProperty('margin-left', '-508px')
}

