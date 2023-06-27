// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
import './style.css';
import CardFrontBack from "../../componets/CardFrontBack";

const BoardGame = (amountCards) => {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);
    return /*html*/ `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
};

// import FlipCard from "../../componets/FlipCard";
// const BoardGame = (amountCards) => {
//     const $htmlCardGame = FlipCard();
//     const $htmlBoardGame = $htmlCardGame.repeat(amountCards);
//     return /*html*/ `
//         <section class="board-game">
//             ${$htmlBoardGame}
//         </section>
//     `;
// };

export default BoardGame;
