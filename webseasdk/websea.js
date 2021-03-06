import RouterView from "./components/RouterView.js"
import RouterLink from "./components/RouterLink.js"
import router from "./../config/routes.js"

let link = document.createElement('link');       
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = `${RouterView.baseURL}webseasdk/css/style.css`;  
document.getElementsByTagName('HEAD')[0].appendChild(link);