function gitelimentbyid(elimentbyid){
    const eliment = document.getElementById(elimentbyid);
    eliment.classList.add('hidden');
    
}
function showeliment(elimentbyid){
    const eliment = document.getElementById(elimentbyid);
    eliment.classList.remove('hidden');
}

function setvaluebyid(elimentid , value){
    const eliment = document.getElementById(elimentid);
    eliment.innerText = value
    
}


function gitArandom(){
    const alfabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alfabets = alfabetString.split('');
    const randomnumber = Math.random() * 25;
    const index = Math.round( randomnumber);
    const alfabet = alfabets[index];
    // console.log(index , alfabet);
    return alfabet;
}
function setbgcolor(eliment){
    const elimentbyid = document.getElementById(eliment);
    elimentbyid.classList.add('bg-pink-500');
    

    
}

function removecolor(eliment){
    const elimentbyid = document.getElementById(eliment);
    elimentbyid.classList.remove('bg-pink-500');
    

    
}
function gettextelimentvaluebyid(elimentbyid){
    const eliment = document.getElementById(elimentbyid);
    const elimenttext = eliment.innerText;
    const value = parseInt(elimenttext);
    return value
}

function keyboardpress(event){
    const playerpressed = event.key;
    console.log('player pressed',playerpressed );
    if( playerpressed === 'Escaped'){
        gameover();
    }


    const currentalfabeteliments = document.getElementById('current-alfabet');
    const currentalfabete = currentalfabeteliments.innerText;
    const expectcase = currentalfabete.toLowerCase();
    console.log(expectcase, playerpressed);


    if(playerpressed === expectcase){
        const currscoreeliment = document.getElementById('current-score');
        const currscoretext = currscoreeliment.innerText;
        const currscore = parseInt(currscoretext)
        // console.log(currscore);
        const newscore = currscore + 1;
        currscoreeliment.innerText = newscore;
        removecolor(expectcase)
        continuegame()
    }
    else{
        console.log('you missd a point');
        const currentlifescore = document.getElementById('life-score');
        const currentlifetext = currentlifescore.innerText;
        const currentlife = parseInt(currentlifetext);
        const newlife = currentlife - 1;
        currentlifescore.innerText = newlife;

        if( newlife === 0){
            gameover()
        }

    }
}
document.addEventListener('keyup' ,keyboardpress )