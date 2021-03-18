// store all save buttons in a variable of some sort
var date = document.getElementById('date');
var buttons = $('button');
var card8 = $('card8');
var card9 = $('card9');
var card10 = $('card10');
var card11 = $('card11');
var card12 = $('card12');
var card1 = $('card1');
var card2 = $('card2');
var card3 = $('card3');
var card4 = $('card4');
var card5 = $('card5');
var text8 = document.getElementById('text8');
var text9 = document.getElementById('text9');
var text10 = document.getElementById('text10');
var text11 = document.getElementById('text11');
var text12 = document.getElementById('text12');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var localT8 = document.getElementById('localText8')
var localT9 = document.getElementById('localText9')
var localT10 = document.getElementById('localText10')
var localT11 = document.getElementById('localText11')
var localT12 = document.getElementById('localText12')
var localT1 = document.getElementById('localText1')
var localT2 = document.getElementById('localText2')
var localT3 = document.getElementById('localText3')
var localT4 = document.getElementById('localText4')
var localT5 = document.getElementById('localText5')
var p8 = document.getElementById('elP8');
var p9 = document.getElementById('elP9');
var p10 = document.getElementById('elP10');
var p11 = document.getElementById('elP11');
var p12 = document.getElementById('elP12');
var p13 = document.getElementById('elP13');
var p14 = document.getElementById('elP14');
var p15 = document.getElementById('elP15');
var p16 = document.getElementById('elP16');


showDate();

$(buttons).click(function(e) {
    clickedBtn = e.target.id;
    saveText();
})

checkTime();

function checkTime() {
    now = moment().format('LT');
    //console.log(now);
}


function showDate() {
    currentDate = moment().format('dddd MMMM Do YYYY');
    date.innerHTML = currentDate;            
}


// When the user clicks "save", create a variable that easily links the targeted save button to the corresponding card
function saveText() {

     saveButton = "";
        switch(clickedBtn) {
            case 'saveBtn1':
                saveButton= "card8";
                
                break;
            case 'saveBtn2':
                saveButton= "card9";
                break;
            case 'saveBtn3':
                saveButton= "card10";
                break;
            case 'saveBtn4':
                saveButton= "card11";
                break;
            case 'saveBtn5':
                saveButton= "card12";
                break;
            case 'saveBtn6':
                saveButton= "card1";
                break;
            case 'saveBtn7':
                saveButton= "card2";
                break;
            case 'saveBtn8':
                saveButton= "card3";
                break;
            case 'saveBtn9':
                saveButton= "card4";
                break;
            case 'saveBtn10':
                saveButton= "card5";
                break;
    }
    console.log(saveButton);                    // This shows me which card corresponds to the clicked save button
    updateCard();
}


function updateCard() {
    if (saveButton === 'card8') { text8 = text8.value; localStorage.setItem('8am', text8);}
    if (saveButton === 'card9') { text9 = text9.value; localStorage.setItem('9am', text9);}
    if (saveButton === 'card10') { text10 = text10.value; localStorage.setItem('10am', text10);}
    if (saveButton === 'card11') { text11 = text11.value; localStorage.setItem('11am', text11);}
    if (saveButton === 'card12') { text12 = text12.value; localStorage.setItem('12pm', text12);}
    if (saveButton === 'card1') { text1 = text1.value; localStorage.setItem('1pm', text1);}
    if (saveButton === 'card2') { text2 = text2.value; localStorage.setItem('2pm', text2);}
    if (saveButton === 'card3') { text3 = text3.value; localStorage.setItem('3pm', text3);}
    if (saveButton === 'card4') { text4 = text4.value; localStorage.setItem('4pm', text4);}
    if (saveButton === 'card5') { text5 = text5.value; localStorage.setItem('5pm', text5);}
}




localText8 = localStorage.getItem('8am')
localT8.textContent = localText8;
if (localText8 !== null) {$(text8).remove();}


localText9 = localStorage.getItem('9am');
localT9.textContent = localText9;
if (localText9 !== null) {$(text9).remove();}

localText10 = localStorage.getItem('10am');
localT10.textContent = localText10;
if (localText10 !== null) {$(text10).remove();}

localText11 = localStorage.getItem('11am');
localT11.textContent = localText11;
if (localText11 !== null) {$(text11).remove();}

localText12 = localStorage.getItem('12pm');
localT12.textContent = localText12;
if (localText12 !== null) {$(text12).remove();}

localText1 = localStorage.getItem('1pm');
localT1.textContent = localText1;
if (localText1 !== null) {$(text1).remove();}

localText2 = localStorage.getItem('2pm');
localT2.textContent = localText2;
if (localText2 !== null) {$(text2).remove();}

localText3 = localStorage.getItem('3pm');
localT3.textContent = localText3;
if (localText3 !== null) {$(text3).remove();}

localText4 = localStorage.getItem('4pm');
localT4.textContent = localText4;
if (localText4 !== null) {$(text4).remove();}

localText5 = localStorage.getItem('5pm');
localT5.textContent = localText5;
if (localText5 !== null) {$(text5).remove();}



var currentHour = moment().hour();
console.log("Current Hour: " +currentHour);
//currentHour === currentHour       => true




p8.setAttribute('data-hour', 8);
myp8 = p8.getAttribute('data-hour');

p9.setAttribute('data-hour', 9); 
myp9 = p9.getAttribute('data-hour');

p10.setAttribute('data-hour', 10);
myp10 = p10.getAttribute('data-hour');

p11.setAttribute('data-hour', 11);
myp11 = p11.getAttribute('data-hour');

p12.setAttribute('data-hour', 12);
myp12 = p12.getAttribute('data-hour');

p13.setAttribute('data-hour', 13);
myp13 = p13.getAttribute('data-hour');

p14.setAttribute('data-hour', 14);
myp14 = p14.getAttribute('data-hour');

p15.setAttribute('data-hour', 15);
myp15 = p15.getAttribute('data-hour');

p16.setAttribute('data-hour', 16);
myp16 = p16.getAttribute('data-hour');

hoursArray = [myp8, myp9, myp10, myp11, myp12, myp13, myp14, myp15, myp16];

function colorCode() {
    for (i=0; i < hoursArray.length; i++) {
        if (hoursArray[i] < currentHour) {
            // If a time block is in the past, make it [grey]
        } else if (hoursArray[i] > currentHour) {
            //If a time block is in the future, make it [green]
        } else {
            // If a time block is the current time, make it [red]
        }
    }
}

colorCode();



