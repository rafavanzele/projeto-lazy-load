const images = document.querySelectorAll('.image-container img')

const oberser = new IntersectionObserver((entries, oberserver) => {

    entries.forEach(entry => {
        if(!entry.isIntersecting) return

        const image = entry.target

        image.src = image.src.replace('?w=10', '?w=1000')

        oberser.unobserve(image)
    })

}, {})


images.forEach((image) => {
    oberser.observe(image)
})