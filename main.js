const quoteText = document.querySelector('.quote-text'),
      quoteButton = document.querySelector('.quote-button');


document.addEventListener('DOMContentLoaded', () => {
  let rand = Math.floor(Math.random() * quotes.length);
  console.log(quotes[rand]);
  quoteText.innerText = quotes[rand];

  quoteButton.addEventListener('click', ()=> {
    rand = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[rand];
  });
});
