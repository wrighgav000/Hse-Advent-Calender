let daysOpened = JSON.parse(localStorage.getItem('daysClicked'));

let icons = [

    '&#x1F6F7;',

    '&#x1F328;',

    '&#x1F43B;',

    '&#x1F332;',

    '&#x1F381;',

    '&#x1F936;',

    '&#x1F9E4;',

    '&#x1F9E3;',

    '&#x1F976;',

    '&#x1F31F;',

    '&#x26F8;',

    '&#x1F36A;',

    '&#x1F98C;',

    '&#x1F3C2;',

    '&#x26F7;',

    '&#x1F3BF;',

    '&#x1F3D2;',

    '&#x1F514;',

    '&#x1F6CF;',

    '&#x1F385;',

    '&#x1F3BF;',

    '&#x1F56F;',

    '&#x26c4;'

  ];

//re-assign the icons to the random list

icons = randomizeIcons(icons);

//Variable to grab all the boexes on the page and store them in a list

const boxes = document.querySelectorAll('.num');



// this functio will show the emoji when the user clicks on

// particular box

function handelBoxClick(event){

  const boxClicked = event.currentTarget;

  const dayClicked = boxClicked.dataset.day;

  const today = new Date();

  //compare the box that was clicked to the current date

  if(today.getDate() >= Number(dayClicked)){

    console.log('Yes, you can open me!!!')

    boxClicked.innerHTML = icons[Number(dayClicked)];

    storeDaysClicked(dayClicked);

  }else{

    console.log('No peaking!!! This box is not ready yet.');

  }

}// end of handleBoxClick



//add event listener to each box

boxes.forEach(function (box){

  box.addEventListener('click',handelBoxClick);

});



//this function will put the day clicked into the local storage

function storeDaysClicked(day){

  // first see if the daysClicked is in local storage

  if(!localStorage.getItem('daysClicked')){ // daysClicked does NOT exist

    daysOpened = [];

  }else{ // if there is something in daysClicked

    daysOpened = JSON.parse(localStorage.getItem('daysClicked'));

  }

  // only need to push to add to daysOpened if the day is not already in the list

  if(!daysOpened.includes(day)){

    daysOpened.push(day);

  }

  localStorage.setItem('daysClicked', JSON.stringify(daysOpened));

  //console.log(daysOpened);

}//end of storeDaysClicke



//this function will randomize the list of icons.

function randomizeIcons(oldList){

  //this will hold the randomList

  let randomList = [];

  //check if our icons have already been randomized

  if(!localStorage.getItem('icons')){

     while(oldList.length > 0){ //while there is still something in the old list

        // this is the random index

        const index = Math.floor(Math.random()*oldList.length);

       //add random item to the randomList

       randomList.push(oldList[index]);

       //remove the item we just added

       oldList.splice(index, 1); // start at index and remove 1 item

      }

      localStorage.setItem('icons', JSON.stringify(randomList));

   }else{ //if there is something in localStorage for icons

     randomList = JSON.parse(localStorage.getItem('icons'));

   }

   return randomList;



}// end of randomizeIcons



//this function will show the previous selected days

function showClickedBoxes(){

  boxes.forEach(function (box){

    //see if the user has clicked on a day.

    const day = box.dataset.day;

    if(daysOpened.includes(Number(day))){

      box.innerHTML = icons[day];

    }

  });

}//end of showClickedBoxes





//TODO ----->

//Randomize the list of icons

//Keep the icons that were previously clicked on the screen.

//Remeber the icons that were already clinked.

// TODO ---->

// add reset ButtonText

//this function will reset the Calendar

function resetCalender(){

  //only reset if they say yes to prompt

  const answer = confirm('Are you sure you want to reset the calendar ? This action cannot be undone.')

  if(answer){

    //clear all items in localStorage

    localStorage.clear();

    //reload the page

    document.location.reload();

  }

} // end of resetCalende

//Add reset Button to the bottom of the Calender

// create the button element

const resetButton = document.createElement('button');

resetButton.innerHTML = 'Reset Calender';

// add an event listener to call resetCalender

resetButton.addEventListener('click', resetCalender);



//place the button on the page

// grab the footer

const footer = document.querySelector('footer');

//add the button to the footer after opening to footer tag

footer.insertAdjacentElement('afterbegin', resetButton);

// afterbegin, beforebegin, beforeend, afterend

//add a little style

footer.style.textAlign = 'center';

footer.style.paddingTop = '20px';
