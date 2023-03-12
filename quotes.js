
const quotes = [
  {phrase: 'Думайте о прошлом, только если воспоминания приятны вам. — Джейн Остин, «Гордость и предубеждение»',
  genre: 'life'},
  {phrase: 'Никто не ценит того, чего слишком много. — Колин Маккалоу, «Поющие в терновнике»',
  genre: 'thoughts'},
  {phrase: 'Улыбайся, не доставляй беде удовольствия. — Габриэль Гарсиа Маркес, «Любовь во время чумы»',
  genre: 'life'},
  {phrase: 'Находишь только тогда, когда не знаешь, чего ищешь. А понимаешь, что нашел, чаще всего только тогда, когда уже потерял. — Алексей Иванов, «Географ глобус пропил»',
  genre: 'thoughts'},
  {phrase: 'Думайте о прошлом, только если воспоминания приятны вам. — Джейн Остин, «Гордость и предубеждение»',
  genre: 'life'},
  {phrase: 'Стремитесь не к успеху, а к ценностям, которые он дает ​"Альберт Эйнштейн',
  genre: 'thoughts'},
];

let thoughtsArr = [];
quotes.forEach(item => {
  // console.log(item);
  if(item.genre == 'thoughts') {
    thoughtsArr.push(item);
  }
});

// let life = [];
// quotes.forEach(item => {
//   if(item.genre == 'life') {
//     life.push(item);
//   }
// });


// function showGenreQuote() {
//   let rand = Math.floor(Math.random() * thoughts.length);
//   console.log(thoughts[rand].phrase);
// }

// showGenreQuote(thoughts);
