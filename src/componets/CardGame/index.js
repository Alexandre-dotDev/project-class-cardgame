import "./style.css";

const CardGame = (icon = "alura-pixel", alt = "Logo da Alura") => {
  return /*html*/`
    <article class="card-game"> 
      <img src="src/img/${icon}.png" alt="${alt}">                        
    </article>
  `;
};
export default CardGame;
