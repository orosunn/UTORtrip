
let trText = document.getElementById('trTextInput');
let trLang = document.getElementById('trLangInput')
let trOutput = document.getElementById('trOutput')
let trButton = document.getElementById('Tbutton')

function translateText() {
if (trLang.value == 'Languages') {
    return
}
else {
console.log(trLang.value)

let requestUrl = 'https://api.mymemory.translated.net/get?q=' + trText.value + '&langpair=' + trLang.value + '|en'
fetch(requestUrl).then(res => res.json()).then(data => {
    console.log(requestUrl);
    trOutput.value = data.responseData.translatedText
});
}


}




trButton.addEventListener('click', translateText)