// Tab changes
const tabTitle = document.title;

window.addEventListener("blur", ( )=> {
    document.title = "Come Back, Grab an EV ! "
})

window.addEventListener("focus" , ()=> {
    document.title = tabTitle;
})