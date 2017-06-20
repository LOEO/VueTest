var conf = require("../../conf.json");

function main() {
    console.log(conf.greetText);
    console.log(2);
    var ele = document.createElement("div");
    ele.textContent = conf.greetText;
    return ele;
}
document.body.appendChild(main());