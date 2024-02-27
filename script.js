// toggle
const toggle = document.getElementById("toggle")
const toggleIcon = document.getElementById("toggle-icon")
const menu = document.getElementById("menu")
let showMenu = false;

toggle.addEventListener("click", toggleMenu)

function toggleMenu(){
    if(!showMenu){
        toggleIcon.src='./images/icon-close.svg'
        showMenu = true;
        menu.style.display= "block";
    } else{
        toggleIcon.src='./images/icon-hamburger.svg'
        showMenu = false;
        menu.style.display= "none";
    }
}

// Slideshow
let cardIndex=0;
const cards = document.getElementsByClassName('card');
const dot =  document.getElementsByClassName("dot");
// console.log(cards);
// console.log(dot);


// showCards(cardIndex);

function currentCard(n){
    showCards(n)
    cardIndex=n
}

function showCards(n){
    dot[cardIndex].classList.remove('active');
    cards[cardIndex].classList.remove('active-card')
    dot[n].classList.add('active')
    cards[n].classList.add('active-card')
}


function showCards(n){
    dot[cardIndex].classList.remove('active');
    cards[cardIndex].classList.remove('active-card')
    dot[n].classList.add('active')
    cards[n].classList.add('active-card')
}

function nextCard(){

}

setInterval(nextCard,1000);


// const showCards = ()=>{
//     dot[cardIndex].classList.remove('active');
//     cards[cardIndex].classList.remove('active-card')
//     dot[n].classList.add('active')
//     cards[n].classList.add('active-card')
// }

// const currentCard = (n) =>{
//     for(i = 0; i<cards.length; i++){
//         if(cards[i] === n){
//             cards[i].classList.add("active");
//         } else{
//             cards[i].classList.remove("active");
//         }
//     }


    // cards.forEach((indice)=>{
    //     if(indice === n-1){
    //         indice.classList.add("active-card")
    //     } else{
    //         indice.classList.remove("active-car")
    //     }
    // })
    // cards[n].classList.add("active-card");
// }
