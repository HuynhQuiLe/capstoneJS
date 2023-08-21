const loadingFiles = [
  "HTTPS://HUYNHQUI.COM/KPCO/KAI-14/REACTOR/ISOTOPE-C/43LK2L",
  "HTTPS://HUYNHQUI.COM/KPCO/KAI-14/REACTOR/ISOTOPE-B/4GHBZ",
  "HTTPS://HUYNHQUI.COM/KPCO/AREA-SCAN/A/SE_23KJ4L",
  "HTTPS://HUYNHQUI.COM/KPCO/AREA-SCAN/A/LM_332K4J3",
  "HTTPS://HUYNHQUI.COM/KPCO/AREA-SCAN/A/SE_439592",
  "HTTPS://HUYNHQUI.COM/KPCO/AREA-SCAN/MOUNTAIN/DATA/",
  "HTTPS://HUYNHQUI.COM/KPCO/AREA-SCAN/CO2_LEVELS",
  "HTTPS://HUYNHQUI.COM/KPCO/AREA-SCAN/MOUNTAIN/DATA/SECTOR/C/",
  "HTTPS://HUYNHQUI.COM/KPCO/FOUNDATION/HIDDEN_FILES",
  "HTTPS://HUYNHQUI.COM/KPCO/EMPLOYEES/COUNT",
  "HTTPS://HUYNHQUI.COM/INITIALIZERS/TEMP_MEASURING_TOOL",
  "HTTPS://HUYNHQUI.COM/INITIALIZERS/DRONES/CAPTURE",
  "HTTPS://HUYNHQUI.COM/INITIALIZERS/SPACESHIP",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-4/TITANIUM_SWORD/DURABILITY",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-4/TITANIUM_SWORD/POWER",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-4/TITANIUM_SWORD/DAMAGE",
  "INITIALIZING SYSTEM…..12",
  "INITIALIZING SYSTEM…..48",
  "INITIALIZING SYSTEM…..72",
  "READY",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-4/WHITE_CRYSTAL_SWORD/DURABILITY",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-4/WHITE_CRYSTAL_SWORD/POWER",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-4/WHITE_CRYSTAL_SWORD/DAMAGE",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-3/HORN_OF_VITALITY/DURABILITY",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-3/HORN_OF_VITALITY/POWER",
  "HTTPS://HUYNHQUI.COM/WEAPONS/GRADE-3/HORN_-OF_VITALITY/DAMAGE",
  "HTTPS://HUYNHQUI.COM/JOURNAL/ORIGIN_STORY",
  "HTTPS://HUYNHQUI.COM/JOURNAL/LORE",
  "HTTPS://HUYNHQUI.COM/JOURNAL/HIDDEN_STORIES",
  "HTTPS://HUYNHQUI.COM/MEDIA/PUBLIC",
  "HTTPS://HUYNHQUI.COM/MEDIA/HIDDEN",
  "LOADING ATTRIBUTES",
];

window.onload = function () {
  var loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  console.log("Page load time is " + loadTime);
};

const html = document.querySelector("html");
const loader = document.querySelector(".loader");
const fileName = document.querySelector(".file-name");
const percentText = document.querySelector(".percent");
const progressBarOverlay = document.querySelector(".progress__bar-overlay");
const loadingAudioRing = document.querySelector(".loading-audio-ring");

let percent = 20;

function mouseOverEffect(event) {
  setTimeout(() => {
    document.querySelector(".loading-audio-ring").style.top =
      event.clientY - 25 + "px";
    document.querySelector(".loading-audio-ring").style.left =
      event.clientX + "px";
    document.querySelector(".loading-audio-ring").style.zIndex = "110";
    document.querySelector(".loading-audio-ring").style.zIndex = "110";
  }, 100);
}
document.addEventListener("mousemove", mouseOverEffect);

if (document.readyState === "loading") {
  html.style.overflowY = "hidden";

  for (let i = 1; i <= loadingFiles.length; i++) {
    let showFileName = setInterval(() => {
      percent += 2;
      if (i < loadingFiles.length) {
        fileName.innerHTML = loadingFiles[i - 1];
        percentText.innerHTML = percent;
        progressBarOverlay.style.width = `${percent}%`;
      } else {
        fileName.innerHTML = loadingFiles[loadingFiles.length - 1];
        percentText.innerHTML = 99;
        progressBarOverlay.style.width = "99%";
      }
      if (document.readyState === "complete") {
        clearInterval(showFileName);
      }
    }, 130 * i);
  }
}

let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    document.querySelector(".force").classList.remove("hidden");
    document.removeEventListener("mousemove", mouseOverEffect);

    handleForceMusic = () => {
      html.style.overflowY = "unset ";
      clearInterval(stateCheck);
      loader.style.display = "none";
      document.querySelector(".intro-music").play();
      document.querySelector(".force").classList.add("hidden");
    };
  }
}, 6000);

const mouse = {};
