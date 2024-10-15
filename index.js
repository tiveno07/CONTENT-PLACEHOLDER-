const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name1 = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="./IMG_6584.JPG" alt=""/>`;
  title.innerHTML = "Sample Blog Post";
  excerpt.innerHTML = "lorem aefsdg gsggs dggdgd sfdgdfafsd fsafsad";
  profile_img.innerHTML = `<img src="./IMG_6584.JPG" alt="" />`;
  name1.innerHTML = "John Doe";
  date.innerHTML = "12th Feb, 2021";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animated_bg_text.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
