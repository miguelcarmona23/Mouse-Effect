const hero = document.querySelector(('.hero'));
const text = document.querySelector(('h1'));


function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
}

hero.addEventListener('mousemove', shadow);