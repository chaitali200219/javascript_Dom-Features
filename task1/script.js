
var a=document.querySelector("h5")

var btn=document.querySelector("#add")

var check=0

btn.addEventListener("click",function(){
    if (check==0)
    {
        a.innerHTML="Friends"
        a.style.color="green"
        btn.innerHTML="Remove Friend"
        check=1
    }
    else
    {
        a.innerHTML="Stranger"
        a.style.color="red"
        btn.innerHTML="Add Friend"
        check=0
    }
})
