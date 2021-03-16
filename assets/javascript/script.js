// store all save buttons in a variable of some sort
var buttons = $('button');



// add an event listener to this variable so that when a button is clicked, I can get
// the id of the button that was clicked
$(buttons).click(function(e) {
    clickedBtn = e.target.id;
    console.log(clickedBtn);
    selectCard();
})

// create a variable that easily links the targeted button to the corresponding card
function selectCard() {
   switch(clickedBtn) {
        case 'saveBtn1':
            console.log('Add text to 8am'); 
            break;
        case 'saveBtn2':
            console.log('Add text to 9am');
            break;
        case 'saveBtn3':
            console.log('Add text to 10am');
            break;
        case 'saveBtn4':
            console.log('Add text to 11am');
            break;
        case 'saveBtn5':
            console.log('Add text tp 12pm');
            break;
        case 'saveBtn6':
            console.log('Add text to 1pm');
            break;
        case 'saveBtn7':
            console.log('Add text to 2pm');
            break;
        case 'saveBtn8':
            console.log('Add text to 3pm');
            break;
        case 'saveBtn9':
            console.log('Add text to 4pm');
            break;
        case 'saveBtn10':
            console.log('Add text to 5pm');
            break;
   }
}




// when I know what button was clicked, I can add the text from that card to localStorage

// once the text is added to localStorage, I can store it in a variable

// Once the data from localStorage is stored in a variable, I can add this to the DOM
// NOTE: I have to figure out how to keep this info in the DOM even when the page is refreshed


// If a time block is in the past, make it [color]

// If a time block is the current time, make it [color]

// if the time block is in the future, make it [color]