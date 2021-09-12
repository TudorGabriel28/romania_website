const galleryitems = document.querySelectorAll(".gallery-item");


const galleryItemOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const galleryItemObserver = new IntersectionObserver(function(
    entries,
    galleryItemObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        
        entry.target.classList.add("fade-in");
        galleryItemObserver.unobserve(entry.target);
      }
    });
  },
  galleryItemOptions);

  galleryitems.forEach(elem => {
    galleryItemObserver.observe(elem);
  });