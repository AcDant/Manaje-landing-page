
// Slideshow
let cardIndex=1;
const cards = document.getElementsByClassName('card');
const dot =  document.getElementsByClassName("dot");
// console.log(cards);
// console.log(dot);



const currentCard = (n) =>{
    for(i = 0; i<cards.length; i++){
        if(cards[i] === n-1){
            cards[i].classList.add("active-card");
        } else{
            cards[i].classList.remove("active-active");
        }
    }
    // cards.forEach((indice)=>{
    //     if(indice === n-1){
    //         indice.classList.add("active-card")
    //     } else{
    //         indice.classList.remove("active-car")
    //     }
    // })
    // cards[n].classList.add("active-card");
}
currentCard(cardIndex);