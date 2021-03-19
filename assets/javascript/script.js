// store all save buttons in a variable of some sort
var date = document.getElementById('date');
var buttons = $('button');

// These are the div elements that contain cards that house the text inputs
//=========================================================================
/*
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
*/
//=========================================================================

//These are the TEXT INPUT ids  
//=========================================================================
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
//=========================================================================

// These are the <p> ELEMENT ids that render the text to the screen from LocalStorage
//=========================================================================
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
//=========================================================================


//These are the ids for the <p> elements that show the hours
//=========================================================================
var p8 = document.getElementById('elP8');
var p9 = document.getElementById('elP9');
var p10 = document.getElementById('elP10');
var p11 = document.getElementById('elP11');
var p12 = document.getElementById('elP12');
var p13 = document.getElementById('elP13');
var p14 = document.getElementById('elP14');
var p15 = document.getElementById('elP15');
var p16 = document.getElementById('elP16');
//=========================================================================

showDate();

$(buttons).click(function(e) {
    clickedBtn = e.target.id;
    saveText(e.target.id);
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




// When the user clicks "save", the input text value is saved to localStorage
function saveText() {

     saveButton = "";
        switch(clickedBtn) {
            case 'saveBtn1':
                saveButton= "card8";
                localStorage.setItem('8am', text8.value);
                break;
            case 'saveBtn2':
                saveButton= "card9";
                localStorage.setItem('9am', text9.value);
                break;
            case 'saveBtn3':
                saveButton= "card10";
                localStorage.setItem('10am', text10.value);
                break;
            case 'saveBtn4':
                saveButton= "card11";
                localStorage.setItem('11am', text11.value);
                break;
            case 'saveBtn5':
                saveButton= "card12";
                localStorage.setItem('12pm', text12.value);
                break;
            case 'saveBtn6':
                saveButton= "card1";
                localStorage.setItem('1pm', text1.value);
                break;
            case 'saveBtn7':
                saveButton= "card2";
                localStorage.setItem('2pm', text2.value);
                break;
            case 'saveBtn8':
                saveButton= "card3";
                localStorage.setItem('3pm', text3.value);
                break;
            case 'saveBtn9':
                saveButton= "card4";
                localStorage.setItem('4pm', text4.value);
                break;
            case 'saveBtn10':
                saveButton= "card5";
                localStorage.setItem('5pm', text5.value);
                break;
    }
    console.log(saveButton);                   
}


// if the page is refreshed, create a loop that iterates through localStorage and appends the data to the text input




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
cardArray = [card8, card9, card10, card11, card12, card1, card2, card3, card4, card5]

function colorCode(cardArray) {
    for (i=0; i < hoursArray.length; i++) {
        if (hoursArray[i] < currentHour) {
            // If a time block is in the past, make it [grey]
            
        } else if (hoursArray[i] > currentHour) {
            //If a time block is in the future, make it [green]
        } else {
            //If a time block is in the present, make it [red]
        }
    }
}

colorCode();
