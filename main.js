import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import ScoreBoard from "./src/object/ScoreBoard";
import BoardGame from "./src/object/BoardGame";
import ScorePlacar from "./src/componets/ScorePlacar";
import VersusHeader from "./src/componets/VersusHeader";
import ArrowDown from "./src/componets/ArrowDown";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend",`
    ${ArrowDown()}
    ${ScoreBoard()}
    ${ScorePlacar(1)}
    ${VersusHeader()}
    ${ScorePlacar(2)}
    ${BoardGame(6)}

`);

