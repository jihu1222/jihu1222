const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click' , getQuote);

const endpoint = 'https://catfact.ninja/fact';

async function getQuote() {
  console.log('quote button was clicked');
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }

  const json = await response.json();
  console.log(json);
  displayQuote(json.fact);

  }
  catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
