// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
import './style.css';
import FlipCard from "../../componets/FlipCard";

const BoardGame = (amountCards) => {
    const $htmlCardGame = FlipCard();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);
    return `
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `;
};

export default BoardGame;
