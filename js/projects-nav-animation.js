

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
            todoCard.style.border = "4px solid #ff014f";
        }

        // Gallery
        if (e.target.getAttribute('data-card') === 'card-2') {
            e.target.style.color = "#ff014f";
            galleryCard.style.border = "4px solid #ff014f";
        }

        // GitHub
        if (e.target.getAttribute('data-card') === 'card-3') {
            e.target.style.color = "#ff014f";
            gitCard.style.border = "4px solid #ff014f";
        }

        // Weather
        if (e.target.getAttribute('data-card') === 'card-4') {
            e.target.style.color = "#ff014f";
            weatherCard.style.border = "4px solid #ff014f";
        }
    })
})




// When mouse off
projectsLinks.forEach(link => {
    link.addEventListener('mouseleave', (e) => {

        // Todo
        if (e.target.getAttribute('data-card') === 'card-1') {
            e.target.style.color = "#212529";
            todoCard.style.border = "2px solid #808080";
        }

        // Galler
        if (e.target.getAttribute('data-card') === 'card-2') {
            e.target.style.color = "#212529";
            galleryCard.style.border = "2px solid #808080";
        }

        // GitHub
        if (e.target.getAttribute('data-card') === 'card-3') {
            e.target.style.color = "#212529";
            gitCard.style.border = "2px solid #808080";
        }

        // Weather
        if (e.target.getAttribute('data-card') === 'card-4') {
            e.target.style.color = "#212529";
            weatherCard.style.border = "2px solid #808080";
        }
    })
})







/*            
*   Cards animation
*/

// When mouse on
todoCard.addEventListener('mouseenter', () => {
    todoCard.style.border = "4px solid #ff014f";
    projectsLinks[0].style.color = "#ff014f";
})

galleryCard.addEventListener('mouseenter', () => {
    galleryCard.style.border = "4px solid #ff014f";
    projectsLinks[1].style.color = "#ff014f";
})

gitCard.addEventListener('mouseenter', () => {
    gitCard.style.border = "4px solid #ff014f";
    projectsLinks[2].style.color = "#ff014f";
})

weatherCard.addEventListener('mouseenter', () => {
    weatherCard.style.border = "4px solid #ff014f";
    projectsLinks[3].style.color = "#ff014f";
})




// When mouse off
todoCard.addEventListener('mouseleave', () => {
    todoCard.style.border = "2px solid #808080";
    projectsLinks[0].style.color = "#212529";
})

galleryCard.addEventListener('mouseleave', () => {
    galleryCard.style.border = "2px solid #808080";
    projectsLinks[1].style.color = "#212529";
})


gitCard.addEventListener('mouseleave', () => {
    gitCard.style.border = "2px solid #808080";
    projectsLinks[2].style.color = "#212529";
})


weatherCard.addEventListener('mouseleave', () => {
    weatherCard.style.border = "2px solid #808080";
    projectsLinks[3].style.color = "#212529";
})




