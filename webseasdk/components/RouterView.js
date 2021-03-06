class RouterView extends HTMLElement {

    static node
    static baseURL = window.location.origin;
    constructor() {
        super()
        this.html = ""
    }

    connectedCallback() {
        this.innerHTML = this.html
    }

    static setView(view) {
        fetch(`${this.baseURL}/app/views/${view}.html`)
            .then((res)=>{
                return res.text()
            })
            .then((res)=>{
                let parser = new DOMParser()
                let doc = parser.parseFromString(res, 'text/html')
                this.html = doc.querySelector("div")
                this.node.innerHTML = this.html.outerHTML
            })

    }
}

customElements.define('router-view', RouterView)
RouterView.node = document.querySelector("router-view")

export default RouterView