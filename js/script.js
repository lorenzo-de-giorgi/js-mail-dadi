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