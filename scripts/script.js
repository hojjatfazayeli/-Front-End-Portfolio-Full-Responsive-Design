const navToggleMenu = document.querySelector(".nav__toggle-icon");
const menuOpen = document.querySelector(".menu");
const coverMenu = document.querySelector(".cover");
const resumeLIstItems = document.querySelectorAll(".resume-list__item");
const portfolioLIstItems = document.querySelectorAll(".portfolio-menu-list__item");
navToggleMenu.addEventListener("click",function(e) {
navToggleMenu.classList.toggle("nav__toggle-icon--open");
menuOpen.classList.toggle("menu--open");
coverMenu.classList.toggle("cover--show");
})

resumeLIstItems.forEach(resumeLIstItem => {
    resumeLIstItem.addEventListener("click", function(){
      document.querySelector(".resume-list__item-active").classList.remove("resume-list__item-active");
      document.querySelector(".resume__contents--show").classList.remove("resume__contents--show");
      this.classList.add("resume-list__item-active");
      let contentId =  this.getAttribute("data-content-id");
        let addClasslist = document.querySelector(contentId);
        addClasslist.classList.add("resume__contents--show");
    })
});

portfolioLIstItems.forEach(portfolioLIstItem => {
  portfolioLIstItem.addEventListener("click", function(){
    document.querySelector(".portfolio-menu-list__item--active").classList.remove("portfolio-menu-list__item--active");
    document.querySelector(".portfolio__content--show").classList.remove("portfolio__content--show");
    this.classList.add("portfolio-menu-list__item--active");
    let contentId =  this.getAttribute("data-id");
      let addClasslist = document.querySelector(contentId);
      addClasslist.classList.add("portfolio__content--show");
  })
});