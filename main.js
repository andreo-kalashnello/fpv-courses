window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    delay: 0.5,
    onComplete: () => {
      document.querySelector(".preloader").style.display = "none";
      const banner = document.querySelector(".banner");
      banner.style.opacity = "1";
      banner.style.transform = "translateY(0)";
    },
  });

  tl.to(".bar1", { y: "-100%", duration: 0.6, ease: "power2.inOut" })
    .to(".bar2", { y: "-100%", duration: 0.6, ease: "power2.inOut" }, "-=0.4")
    .to(".bar3", { y: "-100%", duration: 0.6, ease: "power2.inOut" }, "-=0.4");

  setTimeout(() => {
    document.querySelector(".banner__main-title").classList.add("shimmer-text");
    document.querySelector(".banner__undertitle").classList.add("shimmer-text");
  }, 3000);
});
