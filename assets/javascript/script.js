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


showDate();
checkTime();


$(buttons).click(function(e) {
    clickedBtn = e.target.id;
    saveText(e.target.id);
})



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
    removeStuff();       
}

let localStorageData = {};


function getDataFromLocalStorage() {
    localStorageData.hr8 = (localStorage.getItem('8am'))
    localStorageData.hr9 = (localStorage.getItem('9am'))
    localStorageData.hr10 = (localStorage.getItem('10am'))
    localStorageData.hr11 = (localStorage.getItem('11am'))
    localStorageData.hr12 = (localStorage.getItem('12pm'))
    localStorageData.hr1 = (localStorage.getItem('1pm'))
    localStorageData.hr2 = (localStorage.getItem('2pm'))
    localStorageData.hr3 = (localStorage.getItem('3pm'))
    localStorageData.hr4 = (localStorage.getItem('4pm'))
    localStorageData.hr5 = (localStorage.getItem('5pm'))
}
getDataFromLocalStorage();


function showData() {
    //console.log(localStorageData);  
    if (localStorageData.hr8 !== null) {document.querySelector('.hr8').textContent = localStorage.getItem('8am');};
    if (localStorageData.hr9 !== null) {document.querySelector('.hr9').textContent = localStorage.getItem('9am');}
    if (localStorageData.hr10 !== null) {document.querySelector('.hr10').textContent = localStorage.getItem('10am');}
    if (localStorageData.hr11 !== null) {document.querySelector('.hr11').textContent = localStorage.getItem('11am');}
    if (localStorageData.hr12 !== null) {document.querySelector('.hr12').textContent = localStorage.getItem('12pm');}
    if (localStorageData.hr1 !== null) {document.querySelector('.hr1').textContent = localStorage.getItem('1pm');}
    if (localStorageData.hr2 !== null) {document.querySelector('.hr2').textContent = localStorage.getItem('2pm');}
    if (localStorageData.hr3 !== null) {document.querySelector('.hr3').textContent = localStorage.getItem('3pm');}
    if (localStorageData.hr4 !== null) {document.querySelector('.hr4').textContent = localStorage.getItem('4pm');}
    if (localStorageData.hr5 !== null) {document.querySelector('.hr5').textContent = localStorage.getItem('5pm');}
    
}
showData(localStorageData);


myp8 = p8.getAttribute('data-hour');
myp9 = p9.getAttribute('data-hour');
myp10 = p10.getAttribute('data-hour');
myp11 = p11.getAttribute('data-hour');
myp12 = p12.getAttribute('data-hour');
myp13 = p1.getAttribute('data-hour');
myp14 = p2.getAttribute('data-hour');
myp15 = p3.getAttribute('data-hour');
myp16 = p4.getAttribute('data-hour');
myp17 = p5.getAttribute('data-hour');



/*
var currentHour = moment().hour();
console.log("Current Hour: " +currentHour);
//currentHour === currentHour       => true
*/

var currentHour = 10;
console.log("Current Hour: " +currentHour);


hourAndCards = {
    myp8: 'card8',
    myp9: 'card9',
}


hoursArray = [myp8, myp9, myp10, myp11, myp12, myp13, myp14, myp15, myp16, myp17];
cardsArray = [card8, card9, card10, card11, card12, card1, card2, card3, card4, card5];

function colorCode() {
    for (i=0; i < hoursArray.length; i++) {
        if (hoursArray[i] < currentHour) {
            //future, make it [gray]
            console.log(`Hour ${hoursArray[i]}: This is hour is in the past`);
        } else if (hoursArray[i] > currentHour) {
            //Future, make it [green]
            console.log(`Hour ${hoursArray[i]}: This is hour is in the future`);
        } else if (hoursArray[i] == currentHour) {
            // Present, make it [red]
            console.log(`Hour ${hoursArray[i]}: This is the present hour`);
        }
    }
}

colorCode();


/*
            document.getElementById('card8').classList.add('past'); 
            document.getElementById('card9').classList.add('past'); 
            document.getElementById('card10').classList.add('past'); 
            document.getElementById('card11').classList.add('past'); 
            document.getElementById('card12').classList.add('past'); 
            document.getElementById('card1').classList.add('past'); 
            document.getElementById('card2').classList.add('past'); 
            document.getElementById('card3').classList.add('past'); 
            document.getElementById('card4').classList.add('past'); 
            document.getElementById('card5').classList.add('past'); 
*/