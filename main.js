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
      console.log(e.target.className);
    
      
      
      // if(e.target.className == quotes.)
    });
  });




});
