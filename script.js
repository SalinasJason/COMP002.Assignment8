// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


document.addEventListener('DOMContentLoaded', function() {  // Added a event listener that triggers when the html content is completely loaded.

    let greeting = document.getElementById('greeting'); // Declaring a variable name greeting and using getElementById to find the HTML element.
    let form = document.getElementById('preferences-form'); // Declaring a variable name form and using getElementById to find the HTML element.
    let NameInput = document.getElementById('name'); // Declaring a variable name NameInput and using getElementById to find the HTML element.
    let bgColorInput = document.getElementById('background-color'); // Declaring a variable name bgColorInput and using getElementById to find the HTML element.
    let fgColorInput = document.getElementById('foreground-color'); // Declaring a variable name fgColorInput and using getElementById to find the HTML element.
    console.log('Local storage details:', localStorage) // Console logs local storage details.

    let savedName = localStorage.getItem('userName'); // Declaring a variable named savedName and using getItem to retrieve the saved userName from localStorage.
    let savedBgColor = localStorage.getItem('bgColor'); // Declaring a variable named savedBgColor and using getItem to retrieve the saved background color from localStorage.
    let savedFgColor = localStorage.getItem('fgColor'); // Declaring a variable named savedFgColor and using getItem to retrieve the saved foreground color from localStorage.
    console.log('Saved preferences:', { savedName, savedBgColor, savedFgColor }); // Console logs the savedName, savedBgColor, and savedFgColor

    if (savedName) { // Checks if there is a saved name.
        NameInput.value = savedName; // Sets the value of the userName input to the saved name.
        document.body.style.backgroundColor = savedBgColor; // Sets the background color of the page to the saved background color.
        document.body.style.color = savedFgColor; // Sets the text color of the page to the saved foreground color.
        greeting.textContent = `Welcome, ${savedName}`; // Display a greeting message with the saved name.
        console.log('Applied saved preferences'); // Console logs Applied saved preferences
    }      
    
    form.addEventListener('submit', function (event) { // Added an event listener "submit" to the form.
        event.preventDefault(); // Prevent the default form submission behavior.
    });
});