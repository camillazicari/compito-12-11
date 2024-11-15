/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
const title = document.querySelector("h1");

const changeTitle = function () {
  title.innerText = "DOM Manipulation";
};
changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  title.classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  const changeP = document.querySelectorAll("div p");
  for (let i = 0; i < changeP.length; i++) {
    changeP[i].innerText = "ciao a tutti!";
  }
};
changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const linkProperty = document.querySelectorAll("a:not(footer a)");
  linkProperty.forEach((element) => {
    element.setAttribute("href", "https://www.google.com");
  });
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const secondList = document.getElementById("secondList");
const addToTheSecond = function () {
  const fourthElement = document.createElement("li");
  fourthElement.innerText = "4th";
  secondList.appendChild(fourthElement);
};
addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const firstDiv = document.querySelector("div");
const addParagraph = function () {
  const p = document.createElement("p");
  p.innerText = "questo è un p nel primo div";
  firstDiv.appendChild(p);
};
addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const firstList = document.getElementById("firstList");
const hideFirstUl = function () {
  firstList.innerText = "";
};
hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
const unorderedList = document.querySelectorAll("ul");
const paintItGreen = function () {
  unorderedList.forEach((element) => {
    element.style.backgroundColor = "green";
  });
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  title.addEventListener("click", function () {
    title.textContent = title.textContent.slice(0, -1);
  });
};
makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
const footer = document.querySelector("footer");
const revealFooterLink = function () {
  footer.addEventListener("click", function () {
    const footerLink = document.querySelector("footer a");
    alert(footerLink.href);
  });
};
revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
const tableArea = document.getElementById('tableArea');
const elementiTab = ['immagine', 'nome prodotto', 'quantità', 'prezzo'];
const generateTable = function () {
    const tabella = document.createElement('table');
    tabella.innerHTML = `<tr> <th> ${'immagine'} </th> </tr> <tr> <th> ${'nome prodotto'} </th> </tr> <tr> <th> ${'quantità'} </th> </tr> <tr> <th> ${'prezzo'} </th> </tr>`;
};
generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
