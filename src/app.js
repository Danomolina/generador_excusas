/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    who = getRandomElement(who);
    action = getRandomElement(action);
    what = getRandomElement(what);
    when = getRandomElement(when);

    return `${who} ${action} ${action} ${when}.`;
  }

  document.getElementById("excuse").innerText = generateExcuse();
};
