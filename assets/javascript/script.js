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

showDate();

$(buttons).click(function(e) {
    clickedBtn = e.target.id;
    saveText();
})


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
    if (saveButton === 'card8') { text8 = text8.value; console.log(text8); localStorage.setItem('8am', text8);}
    if (saveButton === 'card9') { text9 = text9.value; console.log(text9); localStorage.setItem('9am', text9);}
    if (saveButton === 'card10') { text10 = text10.value; console.log(text10); localStorage.setItem('10am', text10);}
    if (saveButton === 'card11') { text11 = text11.value; console.log(text11); localStorage.setItem('11am', text11);}
    if (saveButton === 'card12') { text12 = text12.value; console.log(text12); localStorage.setItem('12pm', text12);}
    if (saveButton === 'card1') { text1 = text1.value; console.log(text1); localStorage.setItem('1pm', text1);}
    if (saveButton === 'card2') { text2 = text2.value; console.log(text2); localStorage.setItem('2pm', text2);}
    if (saveButton === 'card3') { text3 = text3.value; console.log(text3); localStorage.setItem('3pm', text3);}
    if (saveButton === 'card4') { text4 = text4.value; console.log(text4); localStorage.setItem('4pm', text4);}
    if (saveButton === 'card5') { text5 = text5.value; console.log(text5); localStorage.setItem('5pm', text5);}
}






// Once the data from localStorage is stored in a variable, I can add this to the DOM
// NOTE: I have to figure out how to keep this info in the DOM even when the page is refreshed


// If a time block is in the past, make it [color]

// If a time block is the current time, make it [color]

// if the time block is in the future, make it [color]