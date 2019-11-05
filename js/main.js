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
    document.querySelector('.iphone').style.height = '500px'
    document.querySelector('.iphone .top').style.height = '30px'
    document.querySelector('.iphone .bottom').style.height = '40px'
    document.querySelector('.iphone .top').style.borderRadius = '50px 50px 100% 100%'
    document.querySelector('.iphone .bottom').style.borderRadius = '100% 100% 50px 50px'
}

let setTablet = () => {
    document.querySelector('.iphone').style.setProperty('--iphone-width', '630px')
    document.querySelector('.iphone').style.setProperty('margin-left', '-315px')
    document.querySelector('.iphone').style.height = '700px'
    document.querySelector('.iphone .top').style.height = '30px'
    document.querySelector('.iphone .bottom').style.height = '40px'
    document.querySelector('.iphone .top').style.borderRadius = '50px 50px 100% 100%'
    document.querySelector('.iphone .bottom').style.borderRadius = '100% 100% 50px 50px'
}

let setDesktop = () => {
    document.querySelector('.iphone').style.setProperty('--iphone-width', '1016px')
    document.querySelector('.iphone').style.setProperty('margin-left', '-508px')
    document.querySelector('.iphone').style.height = '700px'
    document.querySelector('.iphone .top').style.height = '30px'
    document.querySelector('.iphone .bottom').style.height = '70px'
    document.querySelector('.iphone .bottom').style.borderRadius = '0%'
}

