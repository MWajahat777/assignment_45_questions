"use strict";
var E = "The presentation Was done by FaiZan";
// Lower Case
console.log(E.toLowerCase());
// Upper Case
console.log(E.toUpperCase());
// Title case
var F = E.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(F);
