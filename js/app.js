/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

 let NAVBAR = document.querySelector("#navbar__list")
 let SECTIONS = document.querySelectorAll("section")


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// Check Distance Active Element
function getActiveElement() {
    maxValue = SECTIONS[0]
    minValue = 1000000
    for (section of SECTIONS) {
        let bounding = item.getBoundingClientRect()
        if (bounding.top > -300 && bounding.top < minValue) {
            minValue = bounding.top
            maxValue = section
        }
    }
    return maxValue
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function navbarItems() {
    for(let section of SECTIONS) {
        let navbar__item = document.createElement("li")
        navbar__item.className = "menu__link"
        navbar__item.dataset.nav = section.id
        navbar__item.innerText = section.dataset.nav
        NAVBAR.appendChild(navbar__item)
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToEvent() {
    NAVBAR.addEventListener('click', function (item) {
        let clickEvent = document.querySelector('#' + item.target.dataset.nav)
        clickEvent.scrollIntoView()
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu
navbarItems();
// Scroll to section on link click
scrollToEvent();
// Set sections as active