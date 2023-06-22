import "./style.css";
// const randomNum = (max = 3, min = 2) => {
//   return Math.floor(Math.random() * max + (max - min));
// };
const CardGameVerso = (text) => {
  switch (text) {
    case "JS":
      return `
    <article class="card-game=verso"> 
      <img src="src/img/logo-javascript.png" alt="Logo do Javascript">                        
    </article>
    `;
      break;
    case "HTML":
      return `
    <article class="card-game-verso"> 
      <img src="src/img/logo-html.png" alt="Logo do HTML">                        
    </article>
    `;
      break;
    case "CSS":
      return `
    <article class="card-game-verso"> 
      <img src="src/img/logo-css.png" alt="Logo do CSS">                        
    </article>
    `;
    default:
      break;
  }
};
export default CardGameVerso;
