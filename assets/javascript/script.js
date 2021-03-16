// store all save buttons in a variable of some sort
var buttons = $('button');
var card8am = $('card8am');
var card9am = $('card9am');
var card10am = $('card10am');
var card11am = $('card11am');
var card12pm = $('card12pm');
var card1pm = $('card1pm');
var card2pm = $('card2pm');
var card3pm = $('card3pm');
var card4pm = $('card4pm');
var card5pm = $('card5pm');


// add something (input?) so that the user can put text in the card body
//When the user clicks "save" call the selectCard function




$(buttons).click(function(e) {
    clickedBtn = e.target.id;
    saveText();
})


// create a variable that easily links the targeted button to the corresponding card
function saveText() {

     saveButton = "";
        switch(clickedBtn) {
            case 'saveBtn1':
                console.log('Add text to 8am'); 
                saveButton= "card8am";
                break;
            case 'saveBtn2':
                console.log('Add text to 9am');
                saveButton= "card9am";
                break;
            case 'saveBtn3':
                console.log('Add text to 10am');
                saveButton= "card10am";
                break;
            case 'saveBtn4':
                console.log('Add text to 11am');
                saveButton= "card11m";
                break;
            case 'saveBtn5':
                console.log('Add text tp 12pm');
                saveButton= "card12pm";
                break;
            case 'saveBtn6':
                console.log('Add text to 1pm');
                saveButton= "card1pm";
                break;
            case 'saveBtn7':
                console.log('Add text to 2pm');
                saveButton= "card2pm";
                break;
            case 'saveBtn8':
                console.log('Add text to 3pm');
                saveButton= "card3pm";
                break;
            case 'saveBtn9':
                console.log('Add text to 4pm');
                saveButton= "card4pm";
                break;
            case 'saveBtn10':
                console.log('Add text to 5pm');
                saveButton= "card5pm";
                break;
    }
    console.log(saveButton);
    updateCard();
}

function updateCard() {
    if (saveButton === 'card8am') {
        // store the input data in a variable
        // push the variable to localStorage
    }
}






// Once the data from localStorage is stored in a variable, I can add this to the DOM
// NOTE: I have to figure out how to keep this info in the DOM even when the page is refreshed


// If a time block is in the past, make it [color]

// If a time block is the current time, make it [color]

// if the time block is in the future, make it [color]