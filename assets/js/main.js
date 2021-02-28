var nome = prompt("Ciao, ben venuto nel nostro generatore di password... Inserisci il tuo nome!", "Nome")
console.log(nome);
var cognome = prompt("Adesso inserisci il tuo cognome:", "Cognome")
console.log(cognome);
var colore = prompt("Ora inserisci il tuo colore preferito:", "Per esempio: Rosa")
console.log(colore);
var password = nome + cognome + colore;
console.log(password);
document.getElementById('password').innerHTML = "Password Generata: " + password + "20";
