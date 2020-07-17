class $ {
    constructor(selector) {
    if (selector[0] === '.') {
        this.elements = Array.from(document.getElementsByClassName(selector.slice(1)))
    } else if (selector[0] === '#') {
        this.elements = [document.getElementById(selector.slice(1))]
    } else {
        this.elements = Array.from(document.getElementsByTagName(selector))
    }
}
    hide() {
        this.elements.forEach( elem => {
            elem.style.display = 'none'
        }) 
    }

    show() {
        this.elements.forEach( elem => {
            elem.style.display = 'inherit'
        })
    }

    addClassName() {}
}