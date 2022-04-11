let i;
let toggle = document.getElementById("toggle");
let navbar = document.getElementById("navbar");
let navLink = document.querySelectorAll(".nav-link");
toggle.addEventListener("click", ()=>{
    navbar.classList.toggle("invisible");
    
})

for(i=0;i<navLink.length;i++){
    navLink[i].addEventListener("click",()=>{
        navbar.classList.toggle("invisible");
        
    })
}

let vendorToggle = document.getElementById("vendor-toggle");
let eventName = document.getElementById("event");
let vendor = document.getElementById("vendor")


let vendorList = document.getElementById("vendor-list");

vendorToggle.addEventListener("click", ()=>{
    vendorList.classList.toggle("hidden");
})

eventName.addEventListener("click", ()=>{
    vendorList.classList.toggle("hidden");
})
vendor.addEventListener("click", ()=>{
    vendorList.classList.toggle("hidden");
})

document.getElementById("main-video").play();

const video = document.querySelectorAll(".video");

for(i=0;i<video.length;i++){
    
    video[i].addEventListener("mouseenter", (e)=>{
       
       e.target.play();
        // video[i].play();
    })
}
for(i=0;i<video.length;i++){
    
    video[i].addEventListener("mouseleave ", (e)=>{
        console.log("hello");
       console.log(e.target);
       e.target.pause();
        // video[i].play();
    })
}

