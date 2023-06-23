import "./style.css";
import CardGame from "../CardGame";
import CardGameVerso from "../CardGameVerso";

const FlipCard = () => {
  const front = CardGame();
  const back = CardGameVerso("CSS");
  const container = `<div class="flip-card">
        <div class="flip">
            <div class="flip-front">${front}</div>
            <div class="flip-back">${back}</div>
            </div>
        </div>
        `;
  return container;
};
export default FlipCard;
