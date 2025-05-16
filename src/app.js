import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adjective[j] + noun[k] + ".com");
      }
    }
  }
};

