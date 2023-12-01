// Key Currency Pairs


document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_bT9axTw5RecXKkaSnVqkpKL7wPqz5945rdMQxFaM')
        .then(function (response){
        return response.json();
        })
        .then(function (data){
           let CADkeyValue = data.data.CAD.value;
    
           let EURkeyValue = data.data.EUR.value;
           let EURCADtranslation = EURkeyValue / CADkeyValue;
           let roundedEURCADtranslation = EURCADtranslation.toFixed(2);
           let EURkeyPairEl = document.getElementById('keyPairEUR');
           EURkeyPairEl.textContent = 'CAD/EUR ' + roundedEURCADtranslation;
    
           let GBPkeyValue = data.data.GBP.value;
           let GBPCADtranslation = GBPkeyValue / CADkeyValue;
           let roundedGBPCADtranslation = GBPCADtranslation.toFixed(2);
           let GBPkeyPairEl = document.getElementById('keyPairGBP');
           GBPkeyPairEl.textContent = 'CAD/GBP ' + roundedGBPCADtranslation;
    
           let USDkeyValue = data.data.USD.value;
           let USDCADtranslation = USDkeyValue / CADkeyValue;
           let roundedUSDCADtranslation = USDCADtranslation.toFixed(2);
           let USDkeyPairEl = document.getElementById('keyPairUSD');
           USDkeyPairEl.textContent = 'CAD/USD ' + roundedUSDCADtranslation;
    
           let JPYkeyValue = data.data.JPY.value;
           let JPYCADtranslation = JPYkeyValue / CADkeyValue;
           let roundedJPYCADtranslation = JPYCADtranslation.toFixed(2);
           let JPYkeyPairEl = document.getElementById('keyPairJPY');
           JPYkeyPairEl.textContent = 'CAD/JPY ' + roundedJPYCADtranslation;
        });
});
    
    
//Currency Exchange Calculator


function exchangeCurrency (event){
    event.preventDefault();
    
    var targetCurrency = document.getElementById('currency').value;
    console.log('Target Currency:', targetCurrency);
  
    var exchangeAmount = document.getElementById ('amount').value;
    console.log('Amount to be exhanged:', exchangeAmount);
  
    document.getElementById ('targetCurrencyCode').innerText = targetCurrency;
    
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_bT9axTw5RecXKkaSnVqkpKL7wPqz5945rdMQxFaM')
      .then(function (response){
      return response.json();
      })
      .then(function (data){
        console.log(data);

        let CADvalue = data.data.CAD.value;
        console.log('CAD Value:', CADvalue);
        
        let targetValue = data.data[targetCurrency].value;
        console.log('Target Value:', targetValue);
  
        let exchangedValue = (exchangeAmount / targetValue) * CADvalue;
        console.log('Exchanged Value:', exchangedValue);
        let roundedValue = exchangedValue.toFixed(2);
        console.log('Final Value:', roundedValue);
  
        document.getElementById('exchangedAmount').value = roundedValue;
    });
};


//Translator


let trText = document.getElementById('trTextInput');
let trLang = document.getElementById('trLangInput');
let trOutput = document.getElementById('trOutput');
let trButton = document.getElementById('Tbutton');

function translateText() {
if (trLang.value == 'Languages') {
    return
}
else {
console.log(trLang.value);

let requestUrl = 'https://api.mymemory.translated.net/get?q=' + trText.value + '&langpair=' + trLang.value + '|en'
fetch(requestUrl).then(res => res.json()).then(data => {
    console.log(requestUrl);
    trOutput.value = data.responseData.translatedText;
});}};

trButton.addEventListener('click', translateText);