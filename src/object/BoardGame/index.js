// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

import FlipCard from "../../componets/FlipCard";

const BoardGame = (amountCards) => {
    const $htmlCardGame = FlipCard();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);
    return $htmlBoardGame;
};

export default BoardGame;
