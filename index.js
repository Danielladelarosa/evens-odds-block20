// TODO: this file! :)
// console tested 
// sudo code

// when dom content is loaded, event listener to call function
// remember to call function 
document.addEventListener("DOMContentLoaded", function () {
  // go to document use query selector to get the form 
  const form = document.querySelector("form");
  // to get the input element with the number 
  const numberInput = document.querySelector("input[name ='number']");
  // get the element by id numberBank and assign variable 
  const numberBankOutput = document.querySelector("#numberBank output");
  // get the output for odds by id #odds
  const oddsOutput = document.querySelector("#odds output");
  // get the output for evens by id #evens 
  const evensOutput = document.querySelector("#evens output");
  // sort; sort one button. get elemets by id
  const sortOneButton = document.getElementById("sortOne");
  // sort all button; get element by id to sort all 
  const sortAllButton = document.getElementById("sortAll");

  //////// 
  // initialize number bank container 
  let numberBank = [ ];
 
  // add function to render the render bank on page using join and a separator to return a new string 
  function renderNumberBank(){
    numberBankOutput.textContent = numberBank.join(", ");
  }

  // create a function to add a number to the number bank using if statement
  function addNumberToBank (){
    if (!isNaN(number)) {
      numberBank.push(number);
      renderNumberBank( );
    }
  }

  // write function to sort one number 
  // call sortOne 
  function sortOne (){
    // if 
    if (numberBank.length > 0){
      // at least 1 num if not then remove using .shift
      const number = numberBank.concat.shift(); 
      ////// cont with second if for evens 
      if (number % 2 === 0){
        evensOutput.textContent += number + ", ";
      } // else statement 
      else {
        oddsOutput.textContent += number + ", ";
      }
      // render to update 
      renderNumberBank ();
    }
  }

  // name function to sort all numbers 
  function sortAll() {
    // use for loop to go through every number and sort 
    for (let i = 0; i < numberBank.length; i++){
      const number = numberBank[i];
      if (number % 2 === 0) {
        evensOutput.textContent += number + ", ";
      } else {
        oddsOutput.textContent =+ number + ", ";
      }
    }
    numberBank = [ ];
    renderNumberBank ( );
  }


  ////////// 
  // add event listener for user submissison 
  // go to form; listen for submission 
  // use present default method
  form.addEventListener("Add Number" , function (event) {
    event.preventDefault();
    const number = parseInt(numberInput.value);
    numberInput.value = " ";
  }
  );

// event listener for sorting buttons 
  sortOneButton.addEventListener("click", sortOne);

  sortAllButton.addEventListener("click", sortAll);



});




  