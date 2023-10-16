/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let esercizio1 = "I principali datatypes in JS sono Numbers, Strings, Booleans, Null e Undefined";
let numbers = "datatype per rappresentare qualsiasi valore numerico (interi, decimali, negativi...)";
let strings = "datayper per rappresentare valori testuali (anche i numeri all'interno delle stringhe sono testo), sono delimitati da virgolette";
let booleans = "datatype per rappresentare condizioni che hanno due possibili stati (acceso/spento, aperto/chiuso, vero/falso...)";
let _null = "datataype che indica una variablie svuotata (che prima aveva un valore ed ora è vuota)";
let undefined = "dataype che indica una variabile non dichiarata o non assegnata";
console.log("ESERCIZIO 1: " + esercizio1);
console.log("Numbers: " + numbers);
console.log("Strings: " + strings);
console.log("Booleans: " + booleans);
console.log("Null: " + _null);
console.log("Undefined: " + undefined);

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

let esercizio2 = "Gli oggetti sono contenitori che possono contenere varie proprietà oltre che altri oggetti stessi, le proprietà possono essere di più datatypes diversi";
console.log("ESERCIZIO 2: " + esercizio2);

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let es3Num1 = 12;
let es3Num2 = 20;
let esercizio3 = es3Num1 + es3Num2;
console.log("ESERCIZIO 3: " + esercizio3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;
let esercizio4 = x;
console.log("ESERCIZIO 4: " + esercizio4);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Elia";
let esercizio5 = name;
console.log("ESERCIZIO 5: " + esercizio5);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let esercizio6 = 4 - x;
console.log("ESERCIZIO 6: " + esercizio6);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
let esercizio7_1 = name1 !== name2;
let esercizio7_2 = name1 !== name2.toLowerCase();
console.log("ESERCIZIO 7 p1: le due stringhe sono diverse: " + esercizio7_1);
console.log("ESERCIZIO 7 p2: le due stringhe sono uguali se minuscole: " + esercizio7_2);