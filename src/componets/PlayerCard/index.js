import './style.css';
const PlayerCard = (numPlayer) => {
    const player = numPlayer;
    return `
    <article class="player-card">
        <p>Player${player}</P>
    </article>
    `
}
export default  PlayerCard;