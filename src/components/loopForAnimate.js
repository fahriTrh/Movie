const loopForAnimate = (elements, animate) => {
    elements.forEach(element => {
        element.classList.remove(animate)

        setTimeout(() => {
            element.classList.add(animate)
        }, 100);
    })
}

export default loopForAnimate;