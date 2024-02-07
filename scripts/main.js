let card = document.querySelectorAll('.card-option');

// ALTERAR COR DO CARD QUANDO CLICAR
card.forEach(cardUnique => {
    cardUnique.addEventListener("click", (el) => {
        let target = el.target;
        target.classList.add('active');
    });
});

let option  = document.querySelectorAll('#relateBtn');

// ALTERAR COR DO CARD QUANDO CLICAR
option.forEach(optUnique => {
    optUnique.addEventListener("click", (el) => {
        let target = el.target;
        target.classList.add('active');
    });
});

// TIMER DO CHECKOUT