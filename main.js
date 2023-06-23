import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/componets/CardGame";
import PlayerCard from "./src/componets/PlayerCard";
import CardGameVerso from "./src/componets/CardGameVerso";
import FlipCard from "./src/componets/FlipCard";
import BoardGame from "./src/object/BoardGame";

const $root = document.querySelector("#root");
const $htmlPlayerCards = PlayerCard(1) + PlayerCard(2);
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("afterbegin", $htmlPlayerCards);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);


const $htmlFlipCard = FlipCard();
const $htmlCardGameAlura = CardGame();
const $htmlCardGameVersoJS = CardGameVerso("JS");
const $htmlCardGameVersoHTML = CardGameVerso("HTML");
const $htmlCardGameVersoCSS = CardGameVerso("CSS");

