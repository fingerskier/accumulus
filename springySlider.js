const template = document.createElement('template')
template.innerHTML = `
    <style>    
    input { 
        color: coral;
    }
    </style>

    <div>
    <input id="range" type="range" />
    <span id="value" />
    <slot name="title" />
    </div>
`

class SpringySlider extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.input = this.shadowRoot.getElementById('range')
        this.value = this.shadowRoot.getElementById('value')

        this.input.max = this.getAttribute('max')
        this.input.min = this.getAttribute('min')
        this.input.name = this.getAttribute('name')
        this.input.placeholder = this.getAttribute('placeholder')
        this.input.value = 0
    }

    connectedCallback(){
        this.input.addEventListener('mouseup', event=>{
            this.input.value = 0
        })
    }

    disconnectedCallback(){
        this.input.removeEventListener()
    }

    attributeChangedCallback(name, oldValue, newValue){}
}

window.customElements.define('slider-springy', SpringySlider)