import CardGame from '../CardGame';
import './style.css';

const CardFrontBack = () => {
    window.cardFrontBack = {};//Create namespace
    window.cardFrontBack.handleClick = (event) => {//Utiliza o namespace, porém o nome do paramentro precisar ser "event"
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back");
        // if(!$cardFrontBack.classList.contains('-active')){
        //     $cardFrontBack.classList.add("-active");
        // }else{
        //     $cardFrontBack.classList.remove("-active");
        // }
        $cardFrontBack.classList.toggle("-active");
    }
    return /*html*/`
        <div class="card-front-back-div">
            <article class="card-front-back" onclick= "cardFrontBack.handleClick(event)">
                <div class="card front">
                    ${CardGame()}
                </div>
                <div class="card back">
                    ${CardGame("javascript", "Logo do Javascript")}
                </div>    
            </article>
        </div>
    `    
}
export default CardFrontBack;