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