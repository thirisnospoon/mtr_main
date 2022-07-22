const titles = document.querySelectorAll('.rba-title');
const contents = document.querySelectorAll('.rba-content');

titles.forEach((element, index) => {
    element.addEventListener('click', event => {
        event.preventDefault();
        contents[index].classList.toggle('hidden-block');
    })
});


const irs = document.querySelector('.irs-single');
console.log(irs.innerHTML);

const price = document.querySelector('.price-display');

irs.addEventListener('change', event => {
    console.log(11111);
    price.innerHTML = event.target.value;
})
