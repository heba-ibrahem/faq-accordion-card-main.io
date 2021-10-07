var faqs = document.querySelectorAll(".block");
var img = document.getElementById("two")


faqs.forEach(que =>{
    que.addEventListener("click", ()=>{
        que.classList.toggle("active")
        // if(que.classList.toggle("active") === true){
        //     img.classList.add("active")
        // }else{
        //     img.classList.remove("active")
        // }
    })
    que.addEventListener("click", ()=>{
        img.classList.add("active")
    })
 
})

