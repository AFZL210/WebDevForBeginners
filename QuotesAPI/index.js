let realData = "";
const authorName = document.getElementById('author-name');
const quoteText = document.getElementById('quotes');
const nextButton = document.getElementById('nextQuote');

function getRandomQuotes() {
    let rnum = Math.floor(Math.random() * 50);
   // console.log(realData[rnum].author);
   quotes.innerText =  `${realData[rnum].text}`;
   authorName.innerText = `${realData[rnum].author}`;
}

const getQuotes = async () => {
    const apiUrl = "https://type.fit/api/quotes";
    try{
        let data = await fetch(apiUrl);
        realData = await data.json();
      //  console.log(realData);
      getRandomQuotes();
    } catch(error) {}
    };