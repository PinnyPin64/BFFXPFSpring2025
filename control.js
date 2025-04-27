// control between tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    // Remove 'active' class from all tabs and buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked button and its tab
    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});


