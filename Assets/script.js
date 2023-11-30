
let trText = document.getElementById('trTextInput');
let trLang = document.getElementById('trLangInput')
let trOutput = document.getElementById('trOutput')
let trButton = document.getElementById('trBtn')
let trFrench = "fr";
let trJap = "ja";
let trRuss = "ru";
let trKorean = "ko";
let trEsp = "es";




function translateText() {
if (trLang.value = 'French') {
    let trLang = "fr"
} 
if (trLang.value = 'Japanese') {
    let trLang = "ja"
} 
if (trLang.value = 'Russian') {
    let trLang = "ru"
} 
if (trLang.value = 'Korean') {
    let trLang = "ko"
} 
if (trLang.value = 'Spanish') {
    let trLang = "es"
} 
    




let requestUrl = 'https://api.mymemory.translated.net/get?q=' + trText.value + '&langpair=' + trLang.value + '|en'
fetch(requestUrl).then(res => res.json()).then(data => {
    console.log(requestUrl);
    trOutput.value = data.responseData.translatedText
});



}




trButton.addEventListener('click', translateText)