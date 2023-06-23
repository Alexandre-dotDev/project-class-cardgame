import "./style.css";
import PlayerName from "../../componets/PlayerName";

const ScoreBoard = (amountCards) => {
  const $htmlPlayerNames = PlayerName(1) + PlayerName(2);
  return /*html*/ `
        <header class="score-board">
            ${$htmlPlayerNames}
        </header>
    `;
};

export default ScoreBoard;
