import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/componets/CardGame";
import PlayerCard from "./src/componets/PlayerCard";
import CardGameVerso from "./src/componets/CardGameVerso";

const $root = document.querySelector("#root");

const $htmlPlayerCard1 = PlayerCard(1);
const $htmlPlayerCard2 = PlayerCard(2);
$root.insertAdjacentHTML(
  "afterbegin",
  $htmlPlayerCard1 +
    $htmlPlayerCard2
);

const $htmlCardGameAlura = CardGame();
const $htmlCardGameVersoJS = CardGameVerso("JS");
const $htmlCardGameVersoHTML = CardGameVerso("HTML");
const $htmlCardGameVersoCSS = CardGameVerso("CSS");


$root.insertAdjacentHTML(
  "beforeend",
  $htmlCardGameAlura +
    $htmlCardGameAlura +
    $htmlCardGameAlura +
    $htmlCardGameAlura +
    $htmlCardGameAlura +
    $htmlCardGameAlura
);
