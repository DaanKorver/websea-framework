import RouterView from "./RouterView.js";

class RouterLink extends HTMLElement {
    constructor() {
        super();
        this.viewLink = this.getAttribute("view-link")
        this.addEventListener("click", ()=>{window.location.href = `${RouterView.baseURL}${this.viewLink}`})
    }
}

customElements.define('router-link', RouterLink)

export default RouterLink