var arr=[
    {dp:"https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",story:"https://media.istockphoto.com/id/1391298352/photo/attractive-caucasian-smiling-handsome-man-in-blue-t-shirt-looking-right.webp?b=1&s=170667a&w=0&k=20&c=U8Dzr0a7lNHzdAhZpIXIglvPMADeMiU49cAdegCoO-4="},
    {dp:"https://blog.kicksta.co/wp-content/uploads/2023/10/shutterstock_1436385971-400x300.jpg",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaH8-CmxO4Yu8PQdouTcTphVAAHI2Lgso2SKfA6XGFp7_p8MXcnhJxnOmdvIe45-6x4Y&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGsgb_U2V1cYZAOZyHmzNPWB711mKZGo_13EjNj7wFOb2Myf5FewJYWAHByvuUx_nt6Q&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoRNnxqcCF5VHRHxPujDSmWjLnxjU-slMr0nGWZ5Ow1XLvgPuTrmFgNx9iwWU61FBpLc&usqp=CAU"},
    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  
]
// var storyian=document.querySelector("#storyian");
var clutter="";
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});
storyian.innerHTML=clutter;

storyian.addEventListener("click",function(dets){
    
    document.querySelector('#full-screen').style.display="block"
    document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('#full-screen').style.display="none"

    },3000)

});


// var storyImages = document.querySelectorAll(".story img");
//     storyImages.forEach(function(img) {
//         img.addEventListener("click", function(event) {
//             var targetId = event.target.id;
//             document.querySelector('#full-screen').style.display = "block";
//             document.querySelector('#full-screen').style.backgroundImage = `url(${arr[targetId].story})`;

//             setTimeout(function() {
//                 document.querySelector('#full-screen').style.display = "none";
//             }, 3000);
//         });
//     });