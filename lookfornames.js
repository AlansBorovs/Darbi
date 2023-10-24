// Get all the flag elements
let flagElements = document.querySelectorAll('img.avatar.w-6.h-6.country-flag-avatar');

// Initialize an empty array to store the names
let names = [];

// Loop through each flag element
flagElements.forEach((flagElement) => {
    // Check if the flag element's src attribute contains 'lv.svg' (Latvian flag)
    if (flagElement.getAttribute('src').includes('lv.svg')) {
        // If it does, get the parent element of the flag element
        let parentElement = flagElement.parentElement;

        // Find the name element within the parent element
        let nameElement = parentElement.querySelector('p.fs-20.mb-0.text-break');

        // If a name element is found, add the name to the names array
        if (nameElement) {
            names.push(nameElement.textContent);
        }
    }
});

// Print out the names
console.log(names);
