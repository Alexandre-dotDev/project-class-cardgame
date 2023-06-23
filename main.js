import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/componets/CardGame";
import CardGameVerso from "./src/componets/CardGameVerso";
import FlipCard from "./src/componets/FlipCard";
import BoardGame from "./src/object/BoardGame";
import BoardPlayerName from "./src/object/BoardPlayerName";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
const $htmlBoardPlayerName = BoardPlayerName();

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
$root.insertAdjacentHTML("afterbegin", $htmlBoardPlayerName);


const $htmlFlipCard = FlipCard();
const $htmlCardGameAlura = CardGame();
const $htmlCardGameVersoJS = CardGameVerso("JS");
const $htmlCardGameVersoHTML = CardGameVerso("HTML");
const $htmlCardGameVersoCSS = CardGameVerso("CSS");

