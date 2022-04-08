const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click' , getQuote);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote() {
  console.log('quote button was clicked');
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }

  const json = await response.json();
  console.log(json);
  displayQuote(json.activity+'.');
  displayPeople(json.participants);

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

function displayPeople(people) {
  const peopleText = document.querySelector('#js-people-text');
  console.log(people);
  peopleText.textContent = 'Number of participants: '+ numToSymbol(people);
}

function numToSymbol(number){
  var numString = '';

  for (let i=0; i<number; i++){
    numString = numString +' 🚶' ; 
  }
  return numString;
}
