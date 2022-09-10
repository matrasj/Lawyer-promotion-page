const seeMoreBtn = document.querySelector(".see-more-btn");
const sectionAbout = document.querySelector("#about-service");
const secationAboutNavigator = document.querySelector("#about-serivce-link");
const navLinksCon = document.querySelector(".nav-links-con");

// navigation
const criminalLawOffer = document.querySelector(".activity-criminal");
const civilLawOffer = document.querySelector(".activity-civil");
const familyLawOffer = document.querySelector(".activity-family");

//O F F E R   U R L
criminalLawOffer.addEventListener("click", (e) => {
  window.location.assign("/prawo-karne.html");
});

civilLawOffer.addEventListener("click", (e) => {
  window.location.assign("/prawo-cywilne.html");
});

familyLawOffer.addEventListener("click", (e) => {
  window.location.assign("/prawo-rodzinne.html");
});

seeMoreBtn.addEventListener("click", (e) => {
  sectionAbout.scrollIntoView({
    behavior: "smooth",
  });

  navLinksCon.style.cssText += "display : none";
});

secationAboutNavigator.addEventListener("click", (e) => {
  sectionAbout.scrollIntoView({
    behavior: "smooth",
  });

  navLinksCon.style.cssText += "display : none";
});
