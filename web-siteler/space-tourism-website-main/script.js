let body = document.getElementsByTagName("BODY")[0],
    hamburgericon = document.querySelector(".hamburger-icon"),
    navbar_nav = document.querySelector(".navbar-nav"),
    ImagesDiv = document.querySelectorAll(".imagesDiv"), // imagesDiv
    tabtexts = document.querySelectorAll(".TabMetin"), // TabMetin
    tabItems = document.querySelectorAll(".tab_element"); // tab_element

let pagebg = (deger) => {
    const bgclass = document.createAttribute("class");
    if (deger == "home") {
        bgclass.value = "homebg";
    } else if (deger == "destionation") {
        bgclass.value = "destbg";
    } else if (deger == "crew") {
        bgclass.value = "crewbg";
    } else if (deger == "technology") {
        bgclass.value = "bgtechnology";
    }
    let element = document.getElementsByTagName("BODY")[0];
    element.setAttributeNode(bgclass);
}

pagebg(body.id);

/* navbar */
let x = 0;
let y = 2;

hamburgericon.addEventListener("click", () => {
    hamburgericon.classList.toggle("close");
    x++;
    if (x % y == 1) {
        navbar_nav.classList.add("show")
        body.style.overflow = "hidden";
    } else {
        navbar_nav.classList.remove("show");
        body.style.overflow = "auto";
    }
});

/* navbar bitiş */

ImagesDiv.forEach((elements, i) => {
    if (i !== 0) {
        elements.classList.add("hide");
    }
});

tabtexts.forEach((elements, i) => {
    if (i !== 0) {
        elements.classList.add("hide");
    }
});

tabItems.forEach((e,i)=>{
    if(i==0) {
        if (body.id == "destionation") {
            e.style.borderBottom = "1px solid white";
        } else if (body.id == "crew") {
            e.style.backgroundColor = "rgba(255, 255, 255, 0.79)";
            e.style.border = "1px solid transparent";
        }else if (body.id == "technology") {
            e.style.backgroundColor = "#ffffff";
            e.style.color = "black";
        }
    }
});

function clear() {
    ImagesDiv.forEach((e) => {
        e.style.display = "none";
    });
    tabtexts.forEach((e) => {
        e.style.display = "none";
    });
    tabItems.forEach(e => {
        if (body.id == "destionation") {
            e.style.borderBottom = "1px solid transparent";
        } else if (body.id == "crew") {
            e.style.backgroundColor = "rgba(255, 255, 255, 0.79)";
            e.style.border = "1px solid transparent";
        }else if (body.id == "technology") {
            e.style.backgroundColor = "transparent";
            e.style.color = "#FFFFFF";
        }
    });

}


tabItems.forEach((elements, i) => {
    elements.addEventListener("click", () => {
        clear();
        if (body.id == "destionation") {
            elements.style.borderBottom = "1px solid white";
        } else if (body.id == "crew") {
            elements.style.backgroundColor = "white";
            elements.style.border = "1px solid black";
        }else if (body.id == "technology") {
            elements.style.backgroundColor = "#FFFFFF";
            elements.style.color = "black";
        }

        ImagesDiv[i].style.display = "block";
        tabtexts[i].style.display = "block";
    })
});

