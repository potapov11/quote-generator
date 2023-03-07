
const quoteText = document.querySelector('.quote-text'),
      quoteButton = document.querySelector('.quote-button'),
      quoteBtns = document.querySelectorAll('.genre-btn');


document.addEventListener('DOMContentLoaded', () => {

  function showRandomQuote() {
    let rand = Math.floor(Math.random() * quotes.length);
    console.log(quotes.length);
    console.log(quotes[rand]);
    quoteText.innerText = quotes[rand].phrase;
  };

  showRandomQuote();

  
    quoteButton.addEventListener('click', showNextQuote);
    function showNextQuote() {
      let rand = Math.floor(Math.random() * quotes.length);
      quoteText.innerText = quotes[rand].phrase;
  };


/* Сравнение на класс */

  quoteBtns.forEach(quoteBtn => {
    quoteBtn.addEventListener('click', (e)=> {
      let btnclassName = e.target.className;
      console.log(btnclassName);

    quotes.forEach(quote => {
      console.log(quote.genre);

      if(btnclassName ==`genre-btn `+ quote.genre) {
        // console.log('hello');
        // let a = `genre-btn `+ quote.genre;
        // console.log(a);
      }
    });      
    });
  });




});
