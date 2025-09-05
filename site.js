// Exercise 1 Code
//const mainContentSection = document.querySelector('h2')
//mainContentSection.style.color = 'red'

// Exercise 2 Code
//const footerA = document.querySelector('#footerDiv')
//footerA.style.textDecoration = 'underline'

/*
    // Selecting IDs and classes in different ways
    const aboutA = document.getElementById('about')
    aboutA.style.color = 'orange'

    const contactA = document.querySelector('#contact')
    contactA.style.color = 'green'

    const activeA = document.querySelector('.active') // Grabs the first instance of the class only
    activeA.style.color = 'purple'

    const activeB = document.querySelector('h2.active')
    //const activeB = document.querySelector('section .active') // Selects the active class in the section
    activeB.style.color = 'blue'

    // Example of query selecting from a variable. In this example, we have a variable for the section and the we assign variables by query selecting the section instead of the whole document
    const section = document.querySelector('section')

    const example1 = section.querySelector('.active')
    const example2 = section.querySelector('p') 


    // Selecting multiple elements. QuerySelectorAll selects all of the matching query. Essentially a list of elements
    const activeElements = document.querySelectorAll('.active')

    // Foreach method that loops through all of the elements and then sets the border red
    activeElements.forEach(el => el.style.border = '1px solid red')
    // Alternate way to code it
    //for (let i = 0; i < activeElements.length; i++)
    //{
    //    activeElements[i].style.border = '1px solid red'
    //}
*/
document.title = "Justice's Website"
document.body.style.backgroundColor = 'beige'

const contact = document.querySelector('#contact')

// Using the parentNode property to select the parent of the element selected
//contact.addEventListener('mouseover', () => {
//    contact.parentNode.style.backgroundColor = 'blue'
//})

//contact.addEventListener('mouseleave', () => {
//    contact.parentNode.style.backgroundColor = '#444'
//})

// Using the closest method to select the closest element to the selected element that matches the paremeter
contact.addEventListener('mouseover', () => {
    contact.closest('nav').style.backgroundColor = 'blue'
})

contact.addEventListener('mouseleave', () => {
    contact.closest('nav').style.backgroundColor = '#444'
})