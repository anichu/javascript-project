'use script';
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

// Get quote From API
async function getQuote() {
  const proxyUrl = 'https://jacinto-cors-proxy.herokuapp.com/';
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    loading();
    const response = await fetch(proxyUrl + apiUrl);
    console.log('response', response);
    const data = await response.json();
    console.log('data', data.quoteText);
    authorText.innerText = data.quoteAuthor ? data.quoteAuthor : 'unKnown';
    data.quoteText.length > 50
      ? quoteText.classList.add('long-quote')
      : quoteText.classList.remove('long-quote');
    quoteText.innerText = data.quoteText;
    complete();
  } catch (error) {
    getQuote();
    console.log('whoops, no quote', error);
  }
}

const tweetQuote = () => {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
};

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

complete();

// // On Load
// getQuote();
