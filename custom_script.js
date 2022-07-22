const titles = document.querySelectorAll('.rba-title');
const contents = document.querySelectorAll('.rba-content');

titles.forEach((element, index) => {
    element.addEventListener('click', event => {
        event.preventDefault();
        contents[index].classList.toggle('hidden-block');
    })
});

const doneButton = document.querySelector('.done-btn');
const priceDropdown = document.querySelector('#price-dropdown');
const doneButtonGuests = document.querySelector('.done-btn-guests');
const priceDropdownGuests = document.querySelector('.dropdown-guests');

doneButton.addEventListener('click', event => {
    event.preventDefault();
    priceDropdown.style.display = 'none';
});

doneButtonGuests.addEventListener('click', event => {
    event.preventDefault();
    priceDropdownGuests.style.display = 'none';
});