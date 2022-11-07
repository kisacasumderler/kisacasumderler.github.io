// data 

function DataF(deger) {
    console.log(deger);
}

fetch("./Data.json")
    .then((wPage) => wPage.json())
    .then((data) => data.forEach((e) => {
        let id = e.id,
            webPage = e.webpage,
            repo = e.repo,
            preview = e.preview,
            baslik = `<h1>${e.baslik.replace(/-/g, " ")}</h1>`,
            paragraf = `<p>${e.paragraph}</p>`,
            preview_icon = `<i class='${e.preview_icon}'></i>`,
            github_icon = `<i class='${e.github_icon}'></i>`;
        ListData(webPage, repo, preview, baslik, paragraf, preview_icon, github_icon);
    }));

let HomePage = document.getElementById("HomePage");

let ListData = (webPage, repo, preview, baslik, paragraf, preview_icon, github_icon) => {
    HomePage.innerHTML += `<li class='Card'><div class='cardimg'><img src='${preview}'></div><div class='cardbody'>${baslik} ${paragraf}<div><a href='${webPage}' class='z-item'>${preview_icon}</a><a href='${repo}'>${github_icon}</a><b class='site'>Siteyi ziyaret et</b><b class='gith'>Github repoyu gör</b></div></div></li>`;
}


//  menü 
let M_Icon = document.getElementById("M_Icon"),
    MenuBar = document.getElementById("MenuBar"),
    Baslangic = 0;

M_Icon.addEventListener("click", () => {
    Baslangic++;
    if (Baslangic % 2) {
        M_Icon.classList.add("rotate");
        MenuBar.classList.add("open");
    } else {
        M_Icon.classList.remove("rotate");
        MenuBar.classList.remove("open");
    }
})

let z_item = document.querySelectorAll(".z-item"),
    site = document.querySelector(".site"),
    gith = document.querySelector(".gith");

z_item.forEach((element, i) => {
    element.addEventListener("mouseover", () => {
        if (i === 0) {
            site.classList.add("Z_open");
        } else {
            gith.classList.add("Z_open");
        }
    })
    element.addEventListener("mouseout", () => {
        if (i === 0) {
            site.classList.remove("Z_open");
        } else {
            gith.classList.remove("Z_open");
        }
    })
});
