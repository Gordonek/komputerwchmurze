document.addEventListener("DOMContentLoaded", function() {
    var myDivs = document.querySelectorAll(".animation");
  
    var observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    
    var delay=0;

    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 1s "+delay+"s";
          entry.target.style.margin = "0"
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            setTimeout(() => {
              entry.target.style.opacity = "1";
            }, 1000);
          }, delay);
          delay+=0.05;
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions );

    myDivs.forEach(function(div) {
        observer.observe(div);
    });
});
