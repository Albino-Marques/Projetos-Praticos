//eventos: 'keyup' e 'keydown'

/* Evento para "pegar" a tecla digitada. */
document.body.addEventListener('keydown', (event)=>{
    playSound(event.code.toLowerCase())
    console.log(event.code.toLowerCase())
})

/* Evento para "pegar" o click do mouse em "Reproduzir". */
document.querySelector('.composer button').addEventListener('click',() => {
    let song = document.querySelector('#input').value;
    //let keyElement = document.querySelector(songArray)
    
    if (song !== ''){
        let songArray = song.split('');
        playComposition(songArray)
    }

})

/* Evento para "pegar" o click do mouse nas teclas.   */


/* Função para executar o som através do teclado numérico. */
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },200)
    }
}

/* Função para executar o som através da composição.*/

 function playComposition(songArray){
    let wait = 0


     for (let songItem of songArray){
        setTimeout(()=>{
            playSound(`numpad${songItem}`)
        }, wait)

        wait += 250
     }
 }