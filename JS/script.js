const hero = document.querySelector(('.hero'));
const text = document.querySelector(('h1'));
const walk = 100;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = (x / width * walk) - (walk / 2);
}

hero.addEventListener('mousemove', shadow);