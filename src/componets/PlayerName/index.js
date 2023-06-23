import './style.css';
const PlayerName = (content) => {      
    return `
    <article class="player-card">
        <p class="player-name">Player${content}</p>
    </article>    `
}
export default  PlayerName;