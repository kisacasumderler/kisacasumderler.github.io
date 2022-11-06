let H_Menu = document.getElementById("H_Menu"),
    Menu_UL = document.getElementsByTagName("UL")[0],
    Body = document.getElementsByTagName("BODY")[0],
    sayi = 0;

H_Menu.addEventListener("click", () => {
    sayi++;
    let mod = sayi % 2;

    if (mod === 1) {
        H_Menu.classList.add("close");
        Menu_UL.classList.add("MenuShow");
        Body.style.overflow = "hidden";

    } else {
        H_Menu.classList.remove("close");
        Menu_UL.classList.remove("MenuShow");
        Body.style.overflow = "auto";
    }
})