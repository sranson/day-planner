
text8am = document.getElementById('8am');
saveButton1 = document.getElementById('save8am');
Card8am = document.getElementById('Card8am');

saveButton2 = document.getElementById('save9am');
saveButton3 = document.getElementById('save10am');
saveButton4 = document.getElementById('save11am');
saveButton5 = document.getElementById('save12pm');
saveButton6 = document.getElementById('save1pm');
saveButton7 = document.getElementById('save2pm');
saveButton8 = document.getElementById('save3pm');
saveButton9 = document.getElementById('save3pm');
saveButton10 = document.getElementById('save4pm');
saveButton11 = document.getElementById('save5pm');





// VARIABLES
//==========================================================
var now = moment().format('dddd MMMM Do YYYY');
//==========================================================


//FUNCTIONS
//==========================================================
$(saveButton1).click(function() {
    text8am = text8am.value;
    localStorage.setItem("8am", text8am);
    var show8amContent = localStorage.getItem('8am');            //=> Grabs the value from localStorage -- is not populating in input box if page is refreshed
    // show 'show8amContent on HTML page when refreshed
    document.getElementById("Card8am").innerHTML = show8amContent;    // => Not showing when page is refreshed
  
  });

  $(saveButton2).click(function() {
    console.log('Clicked!');
  });

  $(saveButton3).click(function() {
    console.log('Clicked!');
  });

  $(saveButton4).click(function() {
    console.log('Clicked!');
  });

  $(saveButton5).click(function() {
    console.log('Clicked!');
  });

  $(saveButton6).click(function() {
    console.log('Clicked!');
  });

  $(saveButton7).click(function() {
    console.log('Clicked!');
  });

  $(saveButton8).click(function() {
    console.log('Clicked!');
  });

  $(saveButton9).click(function() {
    console.log('Clicked!');
  });

  $(saveButton10).click(function() {
    console.log('Clicked!');
  });

  $(saveButton11).click(function() {
    console.log('Clicked!');
  });






//==========================================================