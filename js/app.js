"use strict";

const btn = document.getElementById("btn");
const p = document.getElementById("text");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
      p.textContent = data.quote;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1500);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}

//  background music
const song = document.getElementById("song");
song.play();
