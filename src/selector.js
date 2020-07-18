// see if you can change the constructor to handle longer selector strings

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

  iterator(func) {
    this.elements.forEach(elem => {
      func(elem);
    });
  }

  hide() {
    this.iterator(elem => elem.style.display = 'none');
    console.log(this.elements)
    return this;
  }

  show() {
    this.iterator(elem => elem.style.display = 'inherit');
    return this;
  }

  addClassName(className) {
    this.iterator(elem => elem.classList.add(className));
    return this;
  }

  removeClassName(className) {
    this.iterator(elem => elem.classList.remove(className));
    return this;
  }

  text(textNode) {
    this.iterator(elem => elem.innerText = textNode);
    return this;
  }

  addChild(nodeType) {
    this.iterator(elem => elem.appendChild(document.createElement(nodeType)));
    return this;
  }

}
