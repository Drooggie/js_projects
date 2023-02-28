const testimonial = document.querySelector('.testimonial')
let countI = 0

addTestimonial()

setInterval(addTestimonial, 10000)

function addTestimonial() {
    console.log(countI, testimonials.length - 1)

    const {text, img, name} = testimonials[countI]

    const box = document.createElement('div')
    box.classList.add('testimonial__box')
    box.innerHTML = `
        <div class="testimonial__line">
        <div class="testimonial__line_process">

        </div>
        </div>

        <div class="testimonial__text">${text}</div>

        <div class="testimonial__user">
            <img src="${img}" alt="" class="testimonial__img">
            <h3 class="testimonial__name">${name}</h3>
        </div>
    `
    testimonial.innerHTML = ''
    testimonial.appendChild(box);

    (countI < testimonials.length - 1) ? countI++ : countI = 0

}

import { testimonials } from './modules/data.js'