let M_Icon = document.getElementById("M_Icon"),
     MenuBar = document.getElementById("MenuBar"),
     Baslangic = 0,
     z_item = document.querySelectorAll(".z-item"),
     site = document.querySelector(".site"),
     gith = document.querySelector(".gith");

    //  menü 
M_Icon.addEventListener("click",()=>{
    Baslangic++;
    if(Baslangic%2){
        M_Icon.classList.add("rotate");
        MenuBar.classList.add("open");
    }else {
        M_Icon.classList.remove("rotate");
        MenuBar.classList.remove("open");
    }
})

z_item.forEach((element,i) => {
    element.addEventListener("mouseover",()=>{
        if(i===0) {
            site.classList.add("Z_open");
        }else {
            gith.classList.add("Z_open");
        }
    })
    element.addEventListener("mouseout",()=>{
        if(i===0) {
            site.classList.remove("Z_open");
        }else {
            gith.classList.remove("Z_open");
        }
    })
});
