function displayQuote(response) {
  new Typewriter('#quote', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "8fc64cbao4tb098dbc03ed2c6338eea9";
let prompt = `Please generate a quote about ${instructionsInput.value} from Russian classic literature`;
let context = "You are a wise AI generator who provides 2 options of answers: in Russian and English languages.Example: `Option 1: Quote in Russian <br /><br /> Option 2: Quote in English` Sign the quote with 'SheCodes AI' inside a <strong> element in the end of the quote divided by <br /><br /> only after the last answer.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt= ${prompt}&context=${context}&key=${apiKey}`;

let quoteElement = document.querySelector("#quote");
quoteElement.classList.remove("hidden");
quoteElement.innerHTML = `<div class="blink">⌛ Generating a quote for you about ${instructionsInput.value}</div>`;

axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);