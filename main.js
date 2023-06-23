import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/componets/CardGame";
import CardGameVerso from "./src/componets/CardGameVerso";
import FlipCard from "./src/componets/FlipCard";
import BoardGame from "./src/object/BoardGame";
import ScoreBoard from "./src/object/ScoreBoard";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
const $htmlScoreBoard = ScoreBoard();

$root.insertAdjacentHTML("beforeend", $htmlScoreBoard + $htmlBoardGame);

const $htmlFlipCard = FlipCard();
const $htmlCardGameAlura = CardGame();
const $htmlCardGameVersoJS = CardGameVerso("JS");
const $htmlCardGameVersoHTML = CardGameVerso("HTML");
const $htmlCardGameVersoCSS = CardGameVerso("CSS");

