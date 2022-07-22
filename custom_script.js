const titles = document.querySelectorAll('.rba-title');
const contents = document.querySelectorAll('.rba-content');

titles.forEach((element, index) => {
    element.addEventListener('click', event => {
        event.preventDefault();
        contents[index].classList.toggle('hidden-block');
    })
});