const nomeUtente = prompt ('Quale è il tuo nome?')

const cognomeUtente = prompt ('Quale è il tuo cognome?')

const colorePreferitoUtente = prompt ('Quale è il tuo colore preferito?')
console.log(nomeUtente, cognomeUtente, colorePreferitoUtente)

const nomeUtenteCompleto = nomeUtente + ' ' + cognomeUtente
console.log('nome Utente Completo: ' , nomeUtenteCompleto)

const password = nomeUtente + cognomeUtente + colorePreferitoUtente + 24;
console.log('password:' , password );

document.getElementById('nomCogCol').innerHTML = `
<p>   
Ciao <strong>${nomeUtenteCompleto}</strong> !<br>
 Questa è la tua password: <strong class= color>${password}</strong> 
</p>
`



