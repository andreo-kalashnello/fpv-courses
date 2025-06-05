window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    delay: 0.5,
    onComplete: () => {
      document.querySelector(".preloader").style.display = "none";
      const banner = document.querySelector(".banner-animate");
      banner.style.opacity = "1";
      banner.style.transform = "translateY(0)";
    },
  });

  tl.to(".bar1", { y: "-100%", duration: 0.6, ease: "power2.inOut" })
    .to(".bar2", { y: "-100%", duration: 0.6, ease: "power2.inOut" }, "-=0.4")
    .to(".bar3", { y: "-100%", duration: 0.6, ease: "power2.inOut" }, "-=0.4");

  setTimeout(() => {
    const mainTitle = document.querySelector(".banner__main-title");
    if (mainTitle) mainTitle.classList.add("shimmer-text");

    const undertitle = document.querySelector(".banner__undertitle");
    if (undertitle) undertitle.classList.add("shimmer-text");

    const mainTitleLeaderboard = document.querySelector(
      ".banner__main-title-leaderboard"
    );
    if (mainTitleLeaderboard)
      mainTitleLeaderboard.classList.add("shimmer-text");

    const undertitleLeaderboard = document.querySelector(
      ".banner__undertitle-leaderboard"
    );
    if (undertitleLeaderboard)
      undertitleLeaderboard.classList.add("shimmer-text");

    const mainTitleLargeMobile = document.querySelector(
      ".banner__main-title-large-mobile"
    );
    if (mainTitleLargeMobile)
      mainTitleLargeMobile.classList.add("shimmer-text");

    const undertitleLargeMobile = document.querySelector(
      ".banner__undertitle-large-mobile"
    );
    if (undertitleLargeMobile)
      undertitleLargeMobile.classList.add("shimmer-text");

    const mainTitleHalfPage = document.querySelector(
      ".banner__main-title-half-page"
    );
    if (mainTitleHalfPage) mainTitleHalfPage.classList.add("shimmer-text");

    const undertitleHalfPage = document.querySelector(
      ".banner__undertitle-half-page"
    );
    if (undertitleHalfPage) undertitleHalfPagee.classList.add("shimmer-text");
  }, 3000);
});
