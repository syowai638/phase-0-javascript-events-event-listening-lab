// index.js

function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add event listener to the button
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to add the event listener
  addingEventListener();
  