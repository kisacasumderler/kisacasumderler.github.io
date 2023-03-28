let acordionHeader, acordionHeaderH2, acordionHeaderSvg, acordionBody;

acordionHeader = document.querySelectorAll(".acordionHeader");
acordionHeaderH2 = document.querySelectorAll(".acordionHeader h2");
acordionHeaderSvg = document.querySelectorAll(".acordionHeader svg");
acordionBody = document.querySelectorAll(".acordionBody");

acordionHeader.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        acordionBody[i].classList.toggle("active");
        acordionHeaderH2[i].classList.toggle("active");
        acordionHeaderSvg[i].classList.toggle("active");
    })
})