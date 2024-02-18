// function play(){
//     const homesection = document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const playgroundsection = document.getElementById('play-ground');
//     playgroundsection.classList.remove('hidden');
// }

function continuegame(){
    const alfabet = gitArandom();
    // console.log('alfabets ', alfabet);

    const currentalfabeteliments = document.getElementById('current-alfabet')
    currentalfabeteliments.innerText = alfabet;

    setbgcolor(alfabet);
}
function play(){
    gitelimentbyid('home-screen')
    gitelimentbyid('final-score')
    showeliment('play-ground')
    setvaluebyid('life-score' , 5)
    setvaluebyid('current-score' , 0)
    continuegame()
}
function gameover(){
    gitelimentbyid('play-ground');
    showeliment('final-score');

    const lastscore = gettextelimentvaluebyid('current-score');
    console.log(lastscore);
    setvaluebyid('last-score' , lastscore);

    const currentalfabet = document.getElementById('current-alfabet');
    const text = currentalfabet.innerText;
    removecolor(text);
}