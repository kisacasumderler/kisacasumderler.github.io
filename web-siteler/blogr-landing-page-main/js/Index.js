let Product, Company, Connect, Product_UL, Company_UL, Connect_UL, ListItemHeaderIMG;

Product = document.querySelector("#Product");
Company = document.querySelector("#Company");
Connect = document.querySelector("#Connect");
Product_UL = document.querySelector("#Product ul");
Company_UL = document.querySelector("#Company ul");
Connect_UL = document.querySelector("#Connect ul");


let ShowNav = (el) => {
    el.style.display = "flex";
    el.previousElementSibling.children[1].style.rotate = "180deg";
}

let closeNav = (el) => {
    el.style.display = "none";
    el.previousElementSibling.children[1].style.rotate = "0deg";
}

let ShowNavMobile = (el) => {
    el.classList.toggle("active");
    el.previousElementSibling.children[2].classList.toggle("rotate");
}

let hamburgerIcon, closeIcon, NavItems, body;

hamburgerIcon = document.querySelector(".hamburgerIcon");
closeIcon = document.querySelector(".closeIcon");
NavItems = document.querySelector("#NavItems");
body = document.querySelector("body");

hamburgerIcon.addEventListener("click", (e) => {
    e.target.style.display = "none";
    closeIcon.style.display = "block";
    NavItems.style.display = "flex";
    body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", (e) => {
    e.target.style.display = "none";
    hamburgerIcon.style.display = "block";
    NavItems.style.display = "none";
    body.style.overflow = "auto";
});

function onWindowResize() {
    var screenWidth = window.innerWidth;
    if (screenWidth > 990) {
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "none";
        NavItems.style.display = "flex";

        Product.addEventListener("mouseover", () => {
            ShowNav(Product_UL);
        });
        
        Product_UL.addEventListener("mouseout", () => {
            closeNav(Product_UL);
        });
        
        Company.addEventListener("mouseover", () => {
            ShowNav(Company_UL);
        });
        
        Company_UL.addEventListener("mouseout", () => {
            closeNav(Company_UL);
        });
        
        Connect.addEventListener("mouseover", () => {
            ShowNav(Connect_UL);
        });
        
        Connect_UL.addEventListener("mouseout", () => {
            closeNav(Connect_UL);
        });
    }
    if (screenWidth < 990) {
        hamburgerIcon.style.display = "block";
        NavItems.style.display = "none";

        Product.addEventListener("click", () => {
            ShowNavMobile(Product_UL);
        });
        Company.addEventListener("click", () => {
            ShowNavMobile(Company_UL);
        });
        Connect.addEventListener("click", () => {
            ShowNavMobile(Connect_UL);
        });
    }
}

window.addEventListener("resize", onWindowResize);
onWindowResize();