

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

  function showNextQuote() {
    let rand = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[rand].phrase;
  };

  function showGenreQuote(arg) {
    let rand = Math.floor(Math.random() * arg.length);
    quoteText.innerText = arg[rand].phrase;
  }

  // function showGenreQuote(a) {
  //     let rand = Math.floor(Math.random() * a.length);
  //     quoteText.innerText = a[rand].phrase;
  // }

  showRandomQuote();

    quoteButton.addEventListener('click', showNextQuote);


/* Сравнение на id  */

  quoteBtns.forEach(quoteBtn => {
    quoteBtn.addEventListener('click', (e)=> {
      console.dir(e);
      let btnIdName = e.target.id;
      console.log(btnIdName);

    quotes.forEach(quote => {
      /* Сравнение на id thoughts */
      if(btnIdName == quote.genre) {
        showGenreQuote(thoughts);
      }
      /* Сравнение на id  */
    });      
    });
  });
});
