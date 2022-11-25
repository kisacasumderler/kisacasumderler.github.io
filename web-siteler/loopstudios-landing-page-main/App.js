let hamburgeropen = document.querySelector(".open"),
    hamburgerclose = document.querySelector(".close"),
    navitems = document.querySelector(".navitems"),
    body = document.getElementsByTagName("body");

    let sayi = 0;
    let navexe = ()=>{
        if(sayi++%2===0){
            hamburgeropen.style.display = "none";
            navitems.style.display = "flex";
            navitems.classList.add("mshow");
            hamburgerclose.style.display = "block";
            hamburgerclose.style.position = "fixed";
            hamburgerclose.style.right = "13%"
            hamburgerclose.style.top = "4rem";
            hamburgerclose.style.zIndex = "2";
            body[0].style.overflow = "hidden";
        }else {
            hamburgeropen.style.display = "block";
            navitems.style.display = "";
            navitems.classList.remove("mshow");
            hamburgerclose.style.display = "none";
            hamburgerclose.style.position = "relative";
            hamburgerclose.style.zIndex = "1";
            body[0].style.overflow = "auto";
        }
    }
    hamburgeropen.addEventListener("click",navexe),
    hamburgerclose.addEventListener("click",navexe);