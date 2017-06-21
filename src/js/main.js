import conf from "../../conf.json";
import "./testvue";
import "../style/css/main.css"

function main() {
    console.log(conf.greetText);
    console.log(2);
    var ele = document.createElement("div");
    ele.textContent = conf.greetText;
    return ele;
}
document.body.appendChild(main());