function highlight() {
  // Select all <strong> tags
  let str = document.querySelectorAll("strong");

  // Change color to green
  str.forEach(tag => {
    tag.style.color = "green";
  });
}

function return_normal() {
  // Select all <strong> tags
  let str = document.querySelectorAll("strong");

  // Change color back to black
  str.forEach(tag => {
    tag.style.color = "black";
  });
}

// Event listeners on paragraph
let para = document.querySelector(".para"); // sirf ek element h
para.addEventListener("mouseenter", highlight);
para.addEventListener("mouseleave", return_normal);
