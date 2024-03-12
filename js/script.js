// random number
function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// email check
let checkButton = document.getElementById('btn');
checkButton.addEventListener('click', function(){
        let email = ['lorenzo@gmail.com', 'samu@gmail.com', 'gianmarco@gmail.com', 'nicola@gmail.com'];
        let userEmail = document.getElementById('email').value;
        let trovato = false;
        for(let i = 0; i < email.length; i++){
                if(userEmail === email[i]){
                        trovato = true;
                }
        }
        const result = document.getElementById('result');
        if(trovato){
                result.innerHTML = 'Utente Trovato'
        } else {
                result.innerHTML = 'Utente NON Trovato'
        }
})
// gioco dadi
let dadiGame = document.getElementById('game-d');
dadiGame.addEventListener('click', function(){
        let number = document.getElementById('number');
        let winner = document.getElementById('winner')
        let randomNumberUser = getRndInteger(1, 6);
        let randomNumberComputer = getRndInteger(1, 6);
        if(randomNumberUser > randomNumberComputer){
                number.innerHTML = `
                <p>Il computer aveva "${randomNumberComputer}". Hai vinto con il numero:</p>
                `;
                winner.innerHTML = `
                <p><img src="img/${randomNumberUser}.svg" alt=""></p>
                `;       
        } else if(randomNumberUser == randomNumberComputer){
                number.innerHTML = `
                <p>Tu e il computer avete pareggiato con il numero:</p>
                `;
                winner.innerHTML = `
                <p><img src="img/${randomNumberComputer}.svg" alt=""></p>
                `;
        } else {
                number.innerHTML = `
                <p>Avevi il numero: "${randomNumberUser}". Il computer ha vinto con il numero:</p>
                `;
                winner.innerHTML = `
                <p><img src="img/${randomNumberComputer}.svg" alt=""></p>
                `;
        }
})