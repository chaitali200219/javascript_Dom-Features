// var elem=document.querySelectorAll(".elem");
// elem.forEach(function(val){
// val.addEventListener("mouseenter",function(){
//     val.childNodes[3].style.opacity=1;
 
// });

// val.addEventListener("mouseleave",function(){
//     val.childNodes[3].style.opacity=0;
// });
// val.addEventListener("mousemove",function(dets){
//     val.childNodes[3].style.left=dets.x+'px';
//     val.childNodes[3].style.top=dets.y+'px';
// });
// });

document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".elem");

    elems.forEach(function(elem) {
        var img = elem.querySelector("img");

        elem.addEventListener("mouseenter", function() {
            img.style.opacity = 1;
        });

        elem.addEventListener("mouseleave", function() {
            img.style.opacity = 0;
        });

        elem.addEventListener("mousemove", function(event) {
            var rect = elem.getBoundingClientRect();
            var offsetX = event.clientX - rect.left;
            var offsetY = event.clientY - rect.top;
            
            img.style.left = offsetX + 'px';
            img.style.top = offsetY + 'px';
        });
    });
});
