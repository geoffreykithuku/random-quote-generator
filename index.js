let cat = document.getElementById('quote-tags')
let quote = document.getElementById('quote-text')
let nam = document.getElementById('quote-author')
let quoteBtn = document.getElementById('gen-new-quote')

const url = "https://type.fit/api/quotes";

function generateQuote() {
    
   return fetch(url)
        .then(resp =>resp.json())
       .then(quotes => {
           let len = quotes.length;
           let i = Math.floor(Math.random() * len)
           let qt = quotes[i];
           quote.textContent = qt.text;
           nam.textContent = ` -- ${qt.author}`;

        })
    .catch(err => {
        console.log(err);
    });
}

quoteBtn.addEventListener('click', generateQuote);