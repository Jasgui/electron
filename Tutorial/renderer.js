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

///Initialisation



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


nextButton.style.display = 'none';
backButton.style.display = 'none';
breadcrumbs.style.display = 'none';
tableStems.style.display = 'none';
tableCaseEndings.style.display = 'none';

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

    tableStems.style.display = "none";
    activateMenu("intro");
    mainText.innerHTML = "Ok! Let's go through the steps with an example. <br />We'll start off easy:<br />Before we start, we need a word, let's take <b>katto</b>, a <i>roof</i>. <br />We also need to know what we want to do with it. We want to say <b>on the roof</b>.";
    nextButtonParameters("Step 1", "step1", "inline");

};

function step1() {

    activateMenu("step1");
    mainText.innerHTML = "<h1>Finding the stems</h1>Every word has 1 or 2 stems in the singular.<br />The stems depend mainly on the way the word ends in the nominative (<i>the dictionary form</i>)<br />On the right side are all the different possibilities.<br />You have to go through the table line by line until the description fits.<br /><br />So in the case of <b>katto</b>, if we go through the possibilities:<br />It doesn't end in -e<br />It doesn't end in -i<br />It ends in a vowel like type nr 5.<br /><br />The stems are also ending in a vowel, so no changes. We get:<br />=>katto <i>(nominative)</i>, katto- <i>(stem 1)</i>, katto- <i>(stem 2)</i>";
    tableStems.style.display = "";
    nextButtonParameters("Step 2", "step2", "inline");
};


function step2() {

    activateMenu("step2");
    tableStems.style.display = "none";
    mainText.innerHTML = "<h1>Choosing the right stem</h1>We want to say <b>on the roof</b> so we need a case called <i>adessive</i>.</br /><i>A list of the different cases with their main meaning is always available through the help menu.</i><br />Stem 2 is used for the partitive and stem 1 is used for all other cases.<br />So here we need stem 1: <b>katto-</b>";
    nextButtonParameters("Step 3", "step3", "inline");
};

function step3() {
    activateMenu("step3");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "";
    mainText.innerHTML = "<h1>Choosing the ending</h1>On the right is a list of the different endings for the different cases.";
}

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

    mainText.innerHTML = "something <b>new</b>";
    nextButton.style.display = 'inline';
    backButton.style.display = 'inline';


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
