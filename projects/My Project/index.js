const toggleButton = document.querySelector('.solutions');
const solutionHView = document.querySelector('.solutions-menu-holder-view');
const solutionItemsHView = document.querySelector('.solutions-menu-items-holder-view');

const arrowView = document.querySelector('.down');

toggleButton.addEventListener('click', function() {
    // Check if the solutions menu is currently visible
    solutionHView.classList.toggle('show'); // Hide the menu with animation
    solutionItemsHView.classList.toggle('show')
    arrowView.classList.toggle('downArrowRotate'); // Rotate with animation
   
});
