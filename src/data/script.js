var finalpath = "M 10 80 Q 300 80 600 80";

var string = document.querySelector(".string");

string.addEventListener("mousemove",(dets)=>{
    path=`M 10 80 Q ${dets.x} ${dets.y} 600 80`
    gsap.to("svg path",{
        attr: { d: path}
    })
})

string.addEventListener("mouseleave",(dets)=>{
    // path=`M 10 80 Q 300 ${dets.y} 600 80`
    gsap.to("svg path",{
        attr: { d: finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})