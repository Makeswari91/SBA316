// Caching elements using getElementById
const form = document.getElementById('studyForm');
const resultContainer = document.getElementById('planResult');
const section = document.getElementById('planSection');

// Caching using querySelectorAll
const inputs = document.querySelectorAll('#studyForm input, #studyForm select'); 

// BOM property to alert time and engage the user
setTimeout(() => {
  alert('Ready to focus and crush your goals?');
}, 3000);//executes after 3 seconds

// BOM property for users to take short breaks
setInterval(() => {
  console.log('Tip: Take short breaks to stay sharp!');
}, 30000);//executes after 3 seconds

// Adding event listeners
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.add('highlight');
  });
  input.addEventListener('blur', () => {
    input.classList.remove('highlight');
  });
});

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

//Get form values
const subject = document.getElementById('subject');
const duration = document.getElementById('duration');
const goal = document.getElementById('goal');
const breaks = document.getElementById('breaks');
