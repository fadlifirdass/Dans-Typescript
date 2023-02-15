"use strict";
const person = {
    name: "Walter White",
    age: 25
};
console.log(person);
var Month;
(function (Month) {
    Month["Jan"] = "Janury";
    Month["Feb"] = "Febuary";
    Month["Mar"] = "March";
})(Month || (Month = {}));
