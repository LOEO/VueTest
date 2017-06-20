import conf from "../../conf.json";
import "./testvue";
import "../style/css/main.css"

function main() {
    var ele = document.createElement("div");
    ele.textContent = conf.greetText;
    return ele;
}
//document.body.appendChild(main());