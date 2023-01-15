const mario = document.querySelector('.mario');
const tree = document.querySelector('.tree');
const ground = document.querySelector('.ground');
const ground2 = document.querySelector('.ground2');

var x = 2;

const jump = () => {
        mario.classList.add('jump');

          setTimeout(() => {

              mario.classList.remove('jump');
        }, 500);

        var myAudio1 = document.getElementById("audio1");
        myAudio1.play()
}

document.addEventListener('keydown',jump);

const loop = setInterval(() => {
    const treePosition = tree.offsetLeft;
    //a  linha abaixo retorna a altura do mario com 'px'
    //o '+' converte a string para numero
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    //Para voce pode ver a posicao do mario
    //console.log(marioPosition);

    if (treePosition < 110 && treePosition > 0 && marioPosition < 130){
      tree.style.animation = 'none';
      tree.style.left = `${treePosition}px`;

      ground.style.animation = 'none';
      ground2.style.animation = 'none';

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './game-over';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      clearInterval(loop);

      var myAudio2 = document.getElementById("audio2");
      myAudio2.play()

      x = 1;
      
    }
    
}, 10);

// conta a 'pontuacao', bascimanete é um time, a clearInterval e usada para finalizar a func
let upto=0;
let counts=setInterval(updated,1000);

function updated(){
    var count= document.getElementById("counter");
    upto += 10;

    if (upto < 100) {
        count.innerHTML = "00" + upto;
    }

    if (upto => 100 && upto < 1000) {
        count.innerHTML = "0" + upto;
    }

    if (upto => 1000 && upto < 10000) {
        count.innerHTML = upto;
    }

    if (x == 1) {
        clearInterval(counts);
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    //clearInterval(LoopScore);
}
