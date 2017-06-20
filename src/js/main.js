var conf = require("../../conf.json");

function main() {
    var ele = document.createElement("div");
    ele.textContent = conf.greetText;
    return ele;
}