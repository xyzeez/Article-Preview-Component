const shareBtn = document.querySelector(".share-btn");
const shareCard = document.querySelector("#share-card");

let cardExpanded = false;

document.addEventListener('click', (e) => {
    if (e.target != shareBtn && e.target.parentElement != shareBtn) {
        closeCard();
    }
})

shareBtn.addEventListener('click', () => {
    if (cardExpanded) {
        closeCard();
    } else if (!cardExpanded){
        expandCard();
    }
})

expandCard = () => {
    shareBtn.setAttribute("aria-expanded", true)
    cardExpanded = true;
}

closeCard = () => {
    shareBtn.setAttribute("aria-expanded", false)
    cardExpanded = false;
}