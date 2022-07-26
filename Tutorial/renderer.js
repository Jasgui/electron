const newbranch = "";

const dataPhrase = "in the shop";
const dataResult = "kaupassa";
const dataResultNoGradation = "kauppassa";
const dataWordEnglish = "a shop";
const dataWordFinnish = "kauppa";

//////////////////////////////////
const mainText = document.getElementById('mainText');
const helperText = document.getElementById('helperText');

const menuTutorial = document.getElementById('menuTutorial');
const menuTrainer = document.getElementById('menuTrainer');
const menuStems = document.getElementById('menuStems');
const menuEndings = document.getElementById('menuEndings');
const menuVocal = document.getElementById('menuVocal');
const menuConsonant = document.getElementById('menuConsonant');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const remindButton = document.getElementById('remindButton');

const breadcrumbs = document.getElementById('breadcrumbs');

const menuIntro = document.getElementById('menuIntro');
const menuStep1 = document.getElementById('menuStep1');
const menuStep2 = document.getElementById('menuStep2');
const menuStep3 = document.getElementById('menuStep3');
const menuStep4 = document.getElementById('menuStep4');
const menuStep5 = document.getElementById('menuStep5');

const tableStems = document.getElementById('tableStems');
const tableCaseEndings = document.getElementById('tableCaseEndings');
const tableVocal1 = document.getElementById('tableVocal1');
const tableVocal2 = document.getElementById('tableVocal2');
const tableCons = document.getElementById('tableCons');

const rowEndByVowel = document.getElementById('rowEndByVowel');
const rowAdessive = document.getElementById('rowAdessive');
const rowTT = document.getElementById('rowTT');

const gridTutorial = document.getElementById('gridTutorial');
const gridTrainer = document.getElementById('gridTrainer');
const trainerText = document.getElementById('trainerText');
const recapStemType = document.getElementById('recapStemType');
const recapStem = document.getElementById('recapStem');
const recapCase = document.getElementById('recapCase');
const recapEnding = document.getElementById('recapEnding');
const recapGradationType = document.getElementById('recapGradationType');
const recapResult = document.getElementById('recapResult');
const recapWord = document.getElementById('recapWord');

const helpCase = document.getElementById('helpCase');
const helpStemType = document.getElementById('helpStemType');
const helpStems = document.getElementById('helpStems');
const helpChooseStem = document.getElementById('helpChooseStem');
const helpEnding = document.getElementById('helpEnding');
const helpEndingVariant = document.getElementById('helpEndingVariant');
const helpGradationType = document.getElementById('helpGradationType');
const helpGradation = document.getElementById('helpGradation');
const helpLost = document.getElementById('helpLost');

const inputField = document.getElementById('inputField');
const trainerButton = document.getElementById('trainerButton');
const helpButton = document.getElementById('helpButton');
const explanations = document.getElementById('explanations');

///Initialisation


/*
fetch("data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => console.log(jsondata));
*/

$('.dropdown')
    .dropdown({
        action: 'hide'
    });

$(document).ready(function () {
    $('.ui .item').on('click', function () {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
});

$('.ui.accordion')
    .accordion();



yesButton.onclick = function () {

    mainText.innerHTML = "Cool!<br />You're all set and ready to use the trainer then! Just click Trainer in the menu";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    remindButton.style.display = "none";

};

noButton.onclick = function () {
    launchTutorial();
};

remindButton.onclick = function () {
    launchTutorial();
};

function launchTutorial() {

    breadcrumbs.style.display = 'inline';
    intro();

};

function intro() {
    activateMenu("intro");
    tableCaseEndings.style.display = "none";
    tableStems.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "Ok! Let's go through the steps with an example. <br />We'll start off easy:<br />Before we start, we need a word, let's take <b>katto</b>, a <i>roof</i>. <br />We also need to know what we want to do with it. We want to say <b>on the roof</b>.";
    nextButtonParameters("Step 1", "step1", "inline");

};

function step1() {
    activateMenu("step1");
    tableCaseEndings.style.display = "none";
    tableStems.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Finding the stems</h1>Every word has 1 or 2 stems in the singular.<br />The stems depend mainly on the way the word ends in the nominative (<i>the dictionary form</i>)<br />On the right side are all the different possibilities.<br />You have to go through the table line by line until the description fits.<br /><br />So in the case of <b>katto</b>, if we go through the possibilities:<br />It doesn't end in -e<br />It doesn't end in -i<br />It ends in a vowel like type nr 5.<br /><br />The stems are also ending in a vowel, so no changes. We get:<br />=>katto <i>(nominative)</i>, katto- <i>(stem 1)</i>, katto- <i>(stem 2)</i>";
    tableStems.style.display = "";
    rowEndByVowel.className = "positive";

    nextButtonParameters("Step 2", "step2", "inline");
};


function step2() {
    activateMenu("step2");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Choosing the right stem</h1>We want to say <b>on the roof</b> so we need a case called <i>adessive</i>.</br /><i>A list of the different cases with their main meaning is always available through the help menu.</i><br />Stem 2 is used for the partitive and stem 1 is used for all other cases.<br />So here we need stem 1: <b>katto-</b>";
    nextButtonParameters("Step 3", "step3", "inline");
};

function step3() {
    activateMenu("step3");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "";
    rowAdessive.className = "positive";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Choosing the ending</h1>On the right is a list of the different endings for the different cases.<br />As you can see from the table, the adessive only has one ending (<i>but 2 versions of that ending, more on that in the next step</i>). The only cases with more than one endings are the partitive and the illative.<br /><br />So in our case the ending is <b>-lla/llä</b>";
    nextButtonParameters("Step 4", "step4", "inline");
};

function step4() {
    activateMenu("step4");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "none";
    tableVocal1.style.display = "";
    tableVocal2.style.display = "";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Choose the version of the ending</h1>Most endings have 2 different versions. In our case <b>-lla/llä</b> means the ending may be either <b>-lla</b> or <b>-llä</b>. In order to choose the right version, one has to use the vocal harmony rule.<br />In Finnish, vowels are divided between <b>back vowels</b> (<i>pronounced more in the back of the mouth</i>) and <b>front vowels</b> (<i>pronounced more in the front</i>). A simple Finnish word can only contain vowels from one group. The vowels i and e are considered neutral and can combine freely with the other vowels.<br />On the right are two tables: one showing the back vowels and their front vowel equivalents and one listing the neutral vowels (e and i) as a reminder.<br />In order to choose the version of the ending, we just look at the stem and choose the version with a vowel from the same group. If a word only contains neutral vowels, consider it front vowel.<br />Here our stem is k<b>a</b>tt<b>o</b>-, containing <b>a</b> and <b>o</b>, both back vowels so we choose the ending with the back vowel too: <b>-lla</b>.<br /><br />One more step and we're done!";

    nextButtonParameters("Last step", "step5", "inline");

};

function step5() {
    activateMenu("step5");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "";
    rowTT.className = "positive";

    mainText.innerHTML = "<h1>Consonant gradation</h1>This step might seem scary but if you follow the rules, it should all go well!<br /><br />So far, we have:<br />a stem: <b>katto-</b><br />an ending: <b>-lla</b><br /><br />Let's first combine them:<br/><br/><i>*kattolla</i><br/><br/>I put a little * before just to remind you we're not done yet and at this stage the word we got might not be right/exist.<br/><br/>Finnish has a set of rules called <i><b>Consonant gradation</b></i>. They occur when the last syllable of the stem changes its status (from open to close or from close to open).<br/><br/>An <b>open syllable</b> ends in a vowel.<br/>A <b>closed syllable</b> is closed by a consonant at the end.<br/><br/>When the status of a syllable changes, the consonant(s) at placed <b>right before it</b> may change.<br/><br/>On the right side you have the two groups, the strong grade (present in the open syllables) and the weak grade (in closed syllables).<br/><br/>Let's look at our example with the word we created and the stem in parallel:<br/><br/>*kattolla&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;katto-<br/><br/>Cut it into syllables (a syllable never starts with 2 consonants):<br/><br/>*kat|tol|la&nbsp;&nbsp;&nbsp;kat|to|-<br/><br/>Underline the last syllable from the stem:<br/><br/>*kat|<u>tol</u>|la&nbsp;&nbsp;&nbsp;kat|<u>to</u>|-<br/><br/>Check if they are open or closed by a consonant:<br/><br/>*kat|<u>to<b>l</b></u>|la&nbsp;&nbsp;&nbsp;kat|<u>to</u>|-<br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>closed</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>open</i><br/><br/>The direction of the change from stem -> word is open -> closed<br/><br/>Now let's look at the consonants right before that syllable:<br/><br/>*ka<b>t|<u>t</b>ol</u>|la<br/><br/>If you look in the list, a <i><b>tt</b></i> in an open syllable becomes a <i><b>t</b></i> in a closed syllable. So here we need to change the <i><b>tt</b></i> to <i><b>t</b></i>:<br/><br/>katolla<br/><br/>There, we have it: <b>katolla</b> = <i>on the roof</i>";

    nextButtonParameters("Trainer", "step5", "inline");

};


function trainer1() {
    gridTutorial.style.display = "none";
    gridTrainer.style.display = "";

    trainerText.innerHTML = "How would you say <b>" + dataPhrase + "</b> in Finnish?";

    inputField.focus();

};

trainerButton.onclick = function () {

    console.log(inputField.value);
    console.log("or");
    console.log(inputField.innerHTML);


    if (inputField.value == dataResult) {

        $('.ui.basic.modal')
            .modal('show');
    } else if (inputField.value == dataResultNoGradation) {
        console.log("almost, you just missed the gradation")
    };


};


inputField.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        trainerButton.click();
    }

});


helpButton.onclick = function () {

    if (helpButton.name == "firstStep") {

        explanations.innerHTML = "TIP:<br/>The first step is to know what word you're going to use. Do you know how to say <b>" + dataWordEnglish + "</b> in Finnish? If you do, type it here:<br/><br/> <div class='ui transparent input'><input type='text' placeholder='' id='explanationInput'></div><br/>";
        const explanationInput = document.getElementById('explanationInput');
        explanationInput.focus();
        helpButton.innerHTML = "<i class='question circle outline icon'></i>I don't know the word in Finnish!";
        helpButton.name = "finnishWord";


        explanationInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {
                event.preventDefault();
                isWordEnglish(explanationInput.value);
            }

        });




    } else if (helpButton.name == "finnishWord") {

        var htmlText = "No worries, here's the word for you: <b>" + dataWordFinnish + "</b>. It means <b><i>" + dataWordEnglish + "</i></b> in English. I added it to the recap table below.<br/>Now you can either try to type your answer again or ask for more help below.";
        updateHelp(htmlText, "recapWord", dataWordFinnish, "How do I find the stems of this word?", "stemType");


    } else if (helpButton.name == "stemType") {

        var htmlText = "";
        updateHelp(htmlText, "recapWord", dataWordFinnish, "How do I find the stems of this word?", "stemType");


    };




};



function isWordEnglish(inputWord) {

    if (inputWord == dataWordFinnish) {

        var htmlText = "Great! You know the word. I added it to the recap table below.<br/>Now you can either try to type your answer again or ask for more help below.";

    } else {
        var htmlText = "Oops... this is not the word I was thinking of.<br/>Let's use <b>" + dataWordFinnish + "</b>, ok? It means <b><i>" + dataWordEnglish + "</i></b> in English. I added it to the recap table below.<br/>Now you can either try to type your answer again or ask for more help below.";
    };

    updateHelp(htmlText, "recapWord", dataWordFinnish, "How do I find the stems of this word?", "stemType");

};


function updateHelp(text, tableCell, content, buttonText, buttonName) {

    explanations.innerHTML = text;
    window[tableCell].innerHTML = content;
    helpButton.innerHTML = "<i class='question circle outline icon'></i>" + buttonText;
    helpButton.name = buttonName;

};


menuStep1.onclick = function () {

    activateMenu("step1");
    step1();

};

menuStep2.onclick = function () {

    activateMenu("step2");
    step2();

};

menuStep3.onclick = function () {

    activateMenu("step3");
    step3();

};

menuStep4.onclick = function () {

    activateMenu("step4");
    step4();

};

menuStep5.onclick = function () {

    activateMenu("step5");
    step5();

};

menuIntro.onclick = function () {

    activateMenu("intro");
    intro();

};


function nextButtonParameters(text, destination, display) {

    nextButton.innerText = text;
    nextButton.style.display = display;
    nextButton.onclick = function () {
        window[destination]();
    };

};


menuTutorial.onclick = function () {

    gridTrainer.style.display = "none";
    gridTutorial.style.display = "";
    intro();

};

menuTrainer.onclick = function () {

    gridTrainer.style.display = "";
    gridTutorial.style.display = "none";
    trainer1();

};


nextButton.onclick = function () {
    console.log("bnjsq");
}

function activateMenu(text) {

    if (text == "intro") {
        menuIntro.className = "active section"
    } else {
        menuIntro.className = "section"
    };
    if (text == "step1") {
        menuStep1.className = "active section"
    } else {
        menuStep1.className = "section"
    };
    if (text == "step2") {
        menuStep2.className = "active section"
    } else {
        menuStep2.className = "section"
    };
    if (text == "step3") {
        menuStep3.className = "active section"
    } else {
        menuStep3.className = "section"
    };
    if (text == "step4") {
        menuStep4.className = "active section"
    } else {
        menuStep4.className = "section"
    };
    if (text == "step5") {
        menuStep5.className = "active section"
    } else {
        menuStep5.className = "section"
    };

};
