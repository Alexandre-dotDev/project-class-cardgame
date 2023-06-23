import './style.css';
const PlayerName = (content) => {      
    return /*html*/`
    <article class="score-player">
        <p class="player-name">Player${content}</p>
    </article>    `
}
export default  PlayerName;