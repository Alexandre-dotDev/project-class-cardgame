import './style.css';
import PlayerName from "../../componets/PlayerName";

const BoardPlayerName = (amountCards) => {
    const $htmlPlayerNames = PlayerName(1) + PlayerName(2);
    return `
        <section class="board-player">
            ${$htmlPlayerNames}
        </section>
    `;
};

export default BoardPlayerName;
