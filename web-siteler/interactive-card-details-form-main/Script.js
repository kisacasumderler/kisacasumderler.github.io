let inputs = document.querySelectorAll("input"),
    confirmbutton = document.getElementById("Confirm"),
    continuebutton = document.getElementById("Continue"),
    spans = document.querySelectorAll(".inputtext"),
    cardbs = document.querySelectorAll(".cardb"),
    FormId = document.getElementById("cardform"),
    succes = document.querySelector(".succes"),
    confirm = document.getElementById("Confirm"),
    Continue = document.getElementById("Continue");

let cardform = document.forms["cardform"],
    cardno = cardform["C_number"],
    cardname = cardform["C_name"],
    MM = cardform["MM"],
    YY = cardform["YY"],
    cvc = cardform["cvc"];

let date = new Date();
let yil = date.getFullYear();
let ay = date.getMonth();

cardno.addEventListener('input', () => {
    cardbs[0].innerHTML = cardno.value;
}),
    cardname.addEventListener('input', () => {
        cardbs[1].innerHTML = cardname.value;
    }),
    MM.addEventListener('input', () => {
        cardbs[2].innerHTML = MM.value;
    }),
    YY.addEventListener('input', () => {
        cardbs[3].innerHTML = YY.value;
    }),
    cvc.addEventListener('input', () => {
        cardbs[4].innerHTML = cvc.value;
    });

let errResult = (i, v_text) => {
    inputs[i].style.border = "2px solid hsl(0, 100%, 66%)";
    spans[i].style.color = "hsl(0, 100%, 66%)";
    spans[i].style.fontSize = ".8rem";
    if (v_text == "c_blank") {
        spans[i].innerHTML = "Can't Blank";
    }
    if (v_text == "w_format") {
        spans[i].innerHTML = "Wrong Format";
    }
    if (v_text == "exp_date") {
        spans[i].innerHTML = "exp date";
    }
    if (v_text == "w_formatno") {
        spans[i].innerHTML = "Wrong Format, Numbers Only.";
    }
    if (v_text == "error") {
        spans[i].innerHTML = "error";
    }
    if (v_text == null) {
        spans[i].innerHTML = "";
        inputs[i].style.border = "2px solid #00cc44";
    }
}


cardform.onsubmit = (event) => {
    event.preventDefault();
    // cardname 
    if (!cardname.value) {
        errResult(0, "c_blank");
        return false;
    }
    if(cardname.value.length<3){
        errResult(0, "w_format");
        return false;
    }
    if (!cardname.value.match(/\s/g)) {
        errResult(0, "w_format");
        return false;
    }else if(!cardname.value.match(/[\*\_\!\+\,\{\}\(\)\[\]\$\#\^\'\-\\\"\.\:\@\|\<\>\~\¨\d]/g)){
        errResult(0, null);
    }else {
        errResult(0, "w_format");
        return false;
    }
    // card number 
    if (cardno.value === "") {
        errResult(1, "c_blank");
        return false;
    }
    if (!cardno.value.match(/[0-9]/g)) {
        errResult(1, "w_formatno");
        return false;
    }
    if (cardno.value.length < 16) {
        errResult(1, "error");
        return false;
    } else {
        errResult(1, null);
    }
    // mm
    if (MM.value === "") {
        errResult(2, "c_blank");
        return false;
    }
    if (!MM.value.match(/[0-9]/g)) {
        errResult(2, "w_formatno");
        return false;
    }
    if (MM.value > 12) {
        errResult(2, "w_format");
        return false;
    }
    if(MM.value.length>2){
        errResult(2, "w_format");
        return false;
    }
    // yy 
    if (YY.value === "") {
        errResult(3, "c_blank");
        return false;
    }
    if (!YY.value.match(/[0-9]/g)) {
        errResult(3, "w_formatno");
        return false;
    }
    if(YY.value.length>2) {
        errResult(3, "w_format");
        return false;
    }
    if ("20" + YY.value <= yil) {
        if ("20" + YY.value < yil) {
            errResult(3, "exp_date");
            return false;
        } else {
            errResult(3, null);
        }
        if (MM.value < (ay + 1)) {
            errResult(2, "exp_date");
            return false;
        } else {
            errResult(2, null)
        }
    }
    // cvc 
    if (cvc.value === "") {
        errResult(4, "c_blank");
        return false;
    }
    if(cvc.value.length>3){
        errResult(4, "w_format");
        return false;
    }
    if (!cvc.value.match(/[0-9]/g)) {
        errResult(4, "w_formatno");
        return false;
    } else {
        errResult(4, null);
    }
    FormId.style.display = "none";
    succes.style.display = "block";
}


Continue.addEventListener("click", () => {
    window.location.reload();
})