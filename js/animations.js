document.addEventListener("DOMContentLoaded", function() {
    var divs = document.querySelectorAll(".animations");
    var observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeIn 1s";
            entry.target.classList.remove("animations");
            observer.unobserve(entry.target);
        }
      });
    }, observerOptions );

    divs.forEach(function(div) {
        observer.observe(div);
    });
});
