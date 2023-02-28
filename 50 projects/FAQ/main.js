const faq = document.querySelectorAll('.faq-item')

faq.forEach(faqItem => {
    faqItem.addEventListener('click', function() {
        faqItem.classList.toggle('active')
    })
})