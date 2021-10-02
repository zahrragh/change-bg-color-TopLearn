// const option = document.querySelectorAll('option')
const body = document.querySelector('body')

// option.forEach(opt => {
//     opt.addEventListener('click', function () {
//         const color = option.getAttribute('value');
//         console.log(color)
//     })
// });



function color(value) {
    body.style.backgroundColor = value;
}