let lastScrollTop = 0;
let isAtTop = true;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    document.querySelector("nav").classList.add("scrolled");
    isAtTop = false;
  } else if (scrollTop === 0 && !isAtTop) {
    document.querySelector("nav").classList.remove("scrolled");
    isAtTop = true;
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
