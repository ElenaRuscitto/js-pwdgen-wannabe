const nomeUtente = prompt ('Quale è il tuo nome?')

const cognomeUtente = prompt ('Quale è il tuo cognome?')

const colorePreferitoUtente = prompt ('Quale è il tuo colore preferito?')
console.log(nomeUtente, cognomeUtente, colorePreferitoUtente)

const nomeUtenteCompleto = nomeUtente + cognomeUtente
console.log('nome Utente Completo: ' , nomeUtenteCompleto)

document.getElementById('nomCogCol').innerHTML = `
<p>   
Ciao <strong>${nomeUtente + ' ' + cognomeUtente}</strong> !<br>
 Questa è la tua password: ${nomeUtenteCompleto}${colorePreferitoUtente}24
</p>
`



