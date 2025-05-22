var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var img = document.querySelector("#imgDiv");
main.addEventListener("mousemove",(dets)=>{
    // console.log(dets);
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 0.8,
        ease: "back.out"
    })
})
img.addEventListener("mouseenter",()=>{
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff9d"
    })
})
img.addEventListener("mouseout",()=>{
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})