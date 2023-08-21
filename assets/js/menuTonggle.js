const toggleMenu = () => {
  document.querySelector("#side-bar").classList.toggle("w-[385px]");
  document.querySelector(".side-menu").classList.toggle("active");
  document.querySelector("#crossIcon").classList.toggle("hidden");
  if (document.querySelector(".side-menu").classList.contains("active")) {
    document.querySelector(".menu-open-effect").play();
  } else {
    document.querySelector(".menu-close-effect").play();
  }
};
