

// Get the links
const projectsLinks = document.querySelectorAll('.projects-link');
// Get the project cards
const todoCard = document.querySelector('#card-1');
const galleryCard = document.querySelector('#card-2');
const weatherCard = document.querySelector('#card-3');
const gitCard = document.querySelector('#card-4');




/*            
*   Links animation
*/

// When mouse on
projectsLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {

        // Todo
        if (e.target.getAttribute('data-card') === 'card-1') {
            e.target.style.color = "#ff014f";
            todoCard.style.border = "3px solid #ff014f";
        }

        // Gallery
        if (e.target.getAttribute('data-card') === 'card-2') {
            galleryCard.style.border = "3px solid #ff014f";
        }

        // GitHub
        if (e.target.getAttribute('data-card') === 'card-3') {
            gitCard.style.border = "3px solid #ff014f";
        }

        // Weather
        if (e.target.getAttribute('data-card') === 'card-4') {
            weatherCard.style.border = "3px solid #ff014f";
        }
    })
})




// When mouse off
projectsLinks.forEach(link => {
    link.addEventListener('mouseleave', (e) => {

        // Todo
        if (e.target.getAttribute('data-card') === 'card-1') {
            e.target.style.color = "#212529";
            todoCard.style.border = "none";
        }

        // Galler
        if (e.target.getAttribute('data-card') === 'card-2') {
            galleryCard.style.border = "none";
        }

        // GitHub
        if (e.target.getAttribute('data-card') === 'card-3') {
            gitCard.style.border = "none";
        }

        // Weather
        if (e.target.getAttribute('data-card') === 'card-4') {
            weatherCard.style.border = "none";
        }
    })
})




/*            
*   Cards animation
*/

// When mouse on
todoCard.addEventListener('mouseenter', () => {
    todoCard.style.border = "3px solid #ff014f";
    projectsLinks[0].style.color = "#ff014f";
})



// When mouse off
todoCard.addEventListener('mouseleave', () => {
    todoCard.style.border = "none";
    projectsLinks[0].style.color = "#212529";
})



