const responsiveMenuIcon = document.querySelector(".responsive-menu");
const closeMenuIcon = document.querySelector(".close-icon");

const activityRangeLink = document.querySelector("#activity-range");
const activityMenu = document.querySelector(".activity-menu");
const logoContainer = document.querySelector(".logo-con");
const navLinksContainer = document.querySelector(".nav-links-con");

let isModalActive = false;

//N A V I G A T I O N   M O D A L
const showModal = () => {
  activityMenu.style.display = "block";
};

const hideModal = () => {
  activityMenu.style.display = "none";
};

document.body.addEventListener("click", (e) => {
  if (isModalActive && !e.target.closest(".nav-links-con")) {
    setTimeout(hideModal, 100);
    isModalActive = false;
  }
});

activityRangeLink.addEventListener("click", (e) => {
  if (!isModalActive) {
    setTimeout(showModal, 100);
    isModalActive = true;
  } else {
    setTimeout(hideModal, 100);
    isModalActive = false;
  }
});

//L O G O   U R L
logoContainer.addEventListener("click", (e) => {
  document.location.href = "/";
});

// M E N U

const showResponsiveMenu = () => {
  navLinksContainer.style.cssText += "display: flex";
};

const hideResponsiveMenu = () => {
  navLinksContainer.style.cssText += "display: none";
};

closeMenuIcon.addEventListener("click", hideResponsiveMenu);
responsiveMenuIcon.addEventListener("click", showResponsiveMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinksContainer.style.display === "flex") {
    hideResponsiveMenu();
  }
});

const x = window.matchMedia("(min-width: 1050px)");
const y = window.matchMedia("(max-width: 1050px)");

const changeMenuDisplay = (query) => {
  if (query.matches && navLinksContainer.style.display === "none") {
    navLinksContainer.style.cssText += "display: flex";
  }
};

const hideMenu = (query) => {
  if (query.matches) {
    navLinksContainer.style.cssText += "display: none";
  }
};

x.addListener(changeMenuDisplay);
y.addListener(hideMenu);
