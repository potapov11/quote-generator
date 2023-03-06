const quoteText = document.querySelector('.quote-text'),
      quoteButton = document.querySelector('.quote-button');


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
});
