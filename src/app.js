/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our", "my", "your", "his", "her", "its"];
  var adj = ["great", "big", "black", "easy", "full", "human", "small"];
  var noun = ["jogger", "racoon", "president", "dog", "shoe", "coder", "fish"];
  var ext = [".com", ".co", ".edu", ".org", ".gov", ".io", ".biz"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${ext[l]}`);
        }
      }
    }
  }
};
