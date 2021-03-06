import Router from "./../webseasdk/models/Router.js"
import RouterView from "./../webseasdk/components/RouterView.js"

const router = new Router({
    mode: "hash",
    root: '/'
})

router
    .add(/about/, () => {
        RouterView.setView("about")
    })
    .add(/projects/, () => {
        RouterView.setView("projects")
    })
    .add('', () => {
        RouterView.setView("home")
    })

export default router;