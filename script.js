// Tab changes
const tabTitle = document.title;

window.addEventListener("blur", ( )=> {
    document.title = "Come Back, Grab an EV ! "
})

window.addEventListener("focus" , ()=> {
    document.title = tabTitle;
})

// Cursor function:
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e)
    {
      cursor.style.cssText=cursor2.style.cssText = "left: "+e.clientX + "px; top: "+e.clientY +"px;" ;
    });