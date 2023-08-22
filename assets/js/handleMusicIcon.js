function handleClickMusicIcon(event) {
  if (event.target.classList.contains("unactive")) {
    event.target.classList.remove("unactive");
    document.querySelector(".intro-music").play();
  } else {
    event.target.classList.add("unactive");
    document.querySelector(".intro-music").pause();
    // document.querySelector(".intro-music").currentTime = 0;
  }
}
