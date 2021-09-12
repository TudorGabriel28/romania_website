const navBar = document.querySelector('.navbar');
const homeIntro = document.querySelector('.homeintro');

//Coloring Navigation Bar when scrolling past homeintro
const navBarOptions = {
    rootMargin: "-200px 0px 0px 0px"
  };
  
  const navBarObserver = new IntersectionObserver(function(
    entries,
    navBarObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navBar.classList.add("scrolled");
      } else {
        navBar.classList.remove("scrolled");
      }
    });
  },
  navBarOptions);

//Observe navBar
navBarObserver.observe(homeIntro);

//Horizontal Scroll Section

//variables needed for scroll menu
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const scrollItems = document.querySelector('.scroll-menu').querySelectorAll('.item');

var itemSize = $('.item').outerWidth(true);


rightArrow.addEventListener('click', function(event){

  var leftPos = $('.scroll-menu').scrollLeft();
  $('.scroll-menu').animate( {scrollLeft: leftPos + itemSize }, 0);   
});

leftArrow.addEventListener('click', function(event){
  
  var leftPos = $('.scroll-menu').scrollLeft();
  $('.scroll-menu').animate( {scrollLeft: leftPos - itemSize }, 0);

});

//Intersection Observers for Grid to add Slide up animation

const gridElem = document.querySelectorAll(".homegrid-container");

const appearGridOptions = {
  threshold: 0,
  rootMargin: "0px 0px -500px 0px"
};

const GridObserver = new IntersectionObserver(function(
  entries,
  GridObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slideup");
      GridObserver.unobserve(entry.target);
    }
  });
},
appearGridOptions);

gridElem.forEach(elem => {
  GridObserver.observe(elem);
});

const textBox = document.querySelectorAll(".text-box");
const title = document.querySelectorAll(".text-box .title");
const line = document.querySelectorAll(".text-box .line");
const p = document.querySelectorAll(".text-box p");

const appearTextBoxItemsOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const TextBoxObserver = new IntersectionObserver(function(
  entries,
  TextBoxObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slideup");
      TextBoxObserver.unobserve(entry.target);
    }
  });
},
appearTextBoxItemsOptions);

title.forEach(elem => {
  TextBoxObserver.observe(elem);
});
line.forEach(elem => {
  TextBoxObserver.observe(elem);
});
p.forEach(elem => {
  TextBoxObserver.observe(elem);
});








/*
//Slide in from left and right grid elments on home
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

//Slide Elements from left side
GridLeftside.forEach(gridcell => {
    appearOnScroll.observe(gridcell);
});

//Slide Elements from right side
GridRightside.forEach(gridcell => {
    appearOnScroll.observe(gridcell);
});
*/
