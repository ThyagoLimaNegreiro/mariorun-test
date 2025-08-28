const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');


    }, 800);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    
    

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 103) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.src ='img/game-over.png'
        mario.style.width = '80px'
        mario.style.height ='90px'

        mario.style.marginLeft = '10px'


    }
 }, 10);

document.addEventListener('keydown', pulo);
window.alert("sobrevia o máximo que você puder obs:ocorre um bug se você demorar a começar a partida:(")

