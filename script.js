/* =========================================================
   1. STICKY NAVBAR LOGIC
   Adds a shadow to the navigation bar when user scrolls down
   ========================================================= */

// Step 1: Get the navigation bar element from the HTML document
const myNavbar = document.getElementById('navbar');

// Step 2: Listen for the 'scroll' event on the entire browser window
window.addEventListener('scroll', function() {
    
    // Step 3: Check if the user has scrolled more than 20 pixels downwards
    if (window.scrollY > 20) {
        // If true, add the 'scrolled' class to the navbar (adds shadow in CSS)
        myNavbar.classList.add('scrolled');
    } else {
        // If false (at the very top), remove the shadow
        myNavbar.classList.remove('scrolled');
    }

});


/* =========================================================
   2. MOBILE HAMBURGER MENU LOGIC
   Opens and closes the menu on mobile phones
   ========================================================= */

// Step 1: Get the hamburger button and the links menu from the HTML
const mobileMenuButton = document.getElementById('hamburger');
const mobileLinksMenu = document.getElementById('nav-links');

// Step 2: Listen for a 'click' on the hamburger button
mobileMenuButton.addEventListener('click', function() {
    
    // Step 3: Toggle the 'active' class. 
    // If it's not there, add it (menu opens). 
    // If it's already there, remove it (menu closes).
    mobileLinksMenu.classList.toggle('active');

});


/* =========================================================
   3. FADE-IN ANIMATION LOGIC (Intersection Observer)
   Animates elements as the user scrolls down to see them
   ========================================================= */

// Step 1: Select EVERY HTML element that has the 'fade-in' class
const animatedElements = document.querySelectorAll('.fade-in');

// Step 2: Create a new "Observer" that checks if an element is on the screen
const myObserver = new IntersectionObserver(function(entries) {
    
    // Loop through all the elements the observer is watching
    entries.forEach(function(entry) {
        
        // Step 3: Read if the element is currently visible on the user's screen
        if (entry.isIntersecting) {
            
            // If it is visible, add the 'appear' class
            // This triggers the CSS to smoothly move and fade in the element
            entry.target.classList.add('appear');
            
        }
    });

});

// Step 4: Tell our observer to start watching every element we found in Step 1
animatedElements.forEach(function(element) {
    myObserver.observe(element);
});
