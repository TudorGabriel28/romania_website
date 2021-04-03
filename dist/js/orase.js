//Intersection Observers for Grid to add Slide up animation

const title = document.querySelectorAll(".title");
const line = document.querySelectorAll(".line");
const p = document.querySelectorAll("p");


const TitleLinePOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const TitleLinePObserver = new IntersectionObserver(function(
    entries,
    TitleLinePObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("slideup");
        TitleLinePObserver.unobserve(entry.target);
      }
    });
  },
  TitleLinePOptions);

title.forEach(elem => {
    TitleLinePObserver.observe(elem);
  });
  line.forEach(elem => {
    TitleLinePObserver.observe(elem);
  });
  p.forEach(elem => {
    TitleLinePObserver.observe(elem);
  });
 
  