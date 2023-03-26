let Close, Hamburger, headerNav, body, tabHead, clearTab, question, tabParagraph, answer, questionSVG, questionPath, questionh4, acordionClear, submit, ContactForm, atpos, dotpos, email, formSpan, formSVG, tabShow, screenWidth, onWindowResize;

Close = document.querySelector(".Close");
Hamburger = document.querySelector(".Hamburger");
headerNav = document.querySelector("header nav");
body = document.querySelector("body");
tabHead = document.querySelectorAll(".tabHead");
tabParagraph = document.querySelectorAll(".tabParagraph");
question = document.querySelectorAll(".question");
answer = document.querySelectorAll(".answer");
questionSVG = document.querySelectorAll(".question svg");
questionPath = document.querySelectorAll(".question path");
questionh4 = document.querySelectorAll(".question h4");
submit = document.querySelector("#submit");
email = document.querySelector("#email");
formSVG = document.querySelector("#ContactFormId svg");
formSpan = document.querySelector("#ContactFormId span");


Hamburger.addEventListener("click", () => {
    headerNav.classList.add("active");
    body.style.overflow = "hidden";
});

Close.addEventListener("click", () => {
    headerNav.classList.remove("active");
    body.style.overflow = "auto";
});

clearTab = () => {
    tabParagraph.forEach(e => {
        e.style.display = "none";
    });
    tabHead.forEach(e => {
        e.removeAttribute("style");
    });
}

tabShow = (e,i) => {
    clearTab();
    tabHead[0].style.borderColor = "transparent";
    e.style.borderColor = "#fa5757";
    tabParagraph[i].style.display = "flex";
}

tabShowMobile = (e,i) => {
    clearTab();
    tabHead[0].style.borderColor = "#9194a1";
    e.style.borderBottom = "3px solid #fa5757";
    tabParagraph[i].style.display = "flex";
}


acordionClear = (item) => {
    item.forEach(e => {
        e.removeAttribute("style");
        e.classList.remove("active");
    });
}

question.forEach((e, i) => {
    e.addEventListener("click", () => {
        acordionClear(questionPath);
        acordionClear(questionh4);
        acordionClear(question);
        acordionClear(answer);
        acordionClear(questionSVG);
        answer[i].classList.add("active");
        answer[i].style.display = "flex";
        questionSVG[i].classList.add("active");
        questionPath[i].style.stroke = "#fa5757";
        questionh4[i].style.color = "#fa5757";
        question[i].style.borderColor = "#fa5757";
    })
});

submit.addEventListener("click", (e) => {
    e.preventDefault();
    ContactForm = document.forms["ContactForm"]["email"].value;
    atpos = ContactForm.indexOf("@");
    dotpos = ContactForm.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= ContactForm.length) {
        email.style.border = "3px solid #fa5757";
        formSVG.style.opacity = "1";
        formSpan.style.opacity = "1";
        return false;
    } else {
        email.removeAttribute("style");
        formSVG.removeAttribute("style");
        formSpan.removeAttribute("style");
        return true;
    }
});


onWindowResize =  () => {
    screenWidth = window.innerWidth;
    if (screenWidth > 720) {
        tabHead.forEach((e, i) => {
            e.addEventListener("click", () => {
                tabShow(e,i);
            })
        });
    }
    if (screenWidth <= 720) {
        tabHead[0].style.borderBottom = "3px solid #fa5757";
        tabHead.forEach((e, i) => {
            e.addEventListener("click", () => {
                tabShowMobile(e,i);
            })
        });
    }
}


window.addEventListener("resize", onWindowResize);
onWindowResize();