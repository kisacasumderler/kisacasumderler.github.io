const tDay = new Date();
const dd = tDay.getDate();
const mm = tDay.getMonth();
const yy = tDay.getFullYear();

function tarihBul(tarih1) {
    var t1 = new Date(tarih1);
    var t2 = new Date();

    var yilFarki = t2.getFullYear() - t1.getFullYear();
    var ayFarki = t2.getMonth() - t1.getMonth();
    var gunFarki = t2.getDate() - t1.getDate();

    if (gunFarki < 0) {
        ayFarki--;
        var sonGun = new Date(t2.getFullYear(), t2.getMonth(), 0).getDate();
        gunFarki += sonGun;
    }

    if (ayFarki < 0) {
        yilFarki--;
        ayFarki += 12;
    }

    if (yilFarki == 0 && ayFarki < 1) {
        ayFarki = 0;
    }

    return { 'yyFark': yilFarki, 'mmFark': ayFarki, 'ddFark': gunFarki };
}


function FormVeriAl() {
    let form = document.getElementById('dateForm');

    let gGun = form.elements['Day'].value;
    let gAy = form.elements['Month'].value;
    let gYil = form.elements['Year'].value;

    return {gGun,gAy,gYil};
}

let btn = document.querySelector('#formOk');
let yyResult = document.querySelector('#yy'), mmResult = document.querySelector('#mm'), ddResult = document.querySelector('#dd'), alert = document.querySelectorAll('.alert'), inputs = document.querySelectorAll('input'), labels = document.querySelectorAll('label');

btn.onclick = (e) => {
    e.preventDefault();
    let data = FormVeriAl();
    let g = formKontrol(data.gGun,0);
    let a = formKontrol(data.gAy,1);
    let y = formKontrol(data.gYil,2);
    if (g != false && a != false && y != false) {
        let tstring = `${y}-${a}-${g}`
        let tBul = tarihBul(tstring);
        ddResult.innerHTML = tBul.ddFark;
        mmResult.innerHTML = tBul.mmFark;
        yyResult.innerHTML = tBul.yyFark;
    }
}

function alertActive(n){
    alert[n].innerHTML = `This field is required`;
    inputs[n].style.borderColor = '#ff5757';
    labels[n].style.color = '#ff5757';
}

function formKontrol(ele,n) {
    if (ele == '') {
        alertActive(n);
        return false;
    }
    if(n==0 && ele>31) {
        alertActive(n);
        alert[n].innerHTML = `wrong format`;
        return false
    }
    if(n==0 && ele==0) {
        alertActive(n);
        alert[n].innerHTML = `wrong format`;
        return false
    }
    if(n==1 && ele>12) {
        alertActive(n);
        alert[n].innerHTML = `wrong format`;
        return false
    }
    if(n==1 && ele==0) {
        alertActive(n);
        alert[n].innerHTML = `wrong format`;
        return false
    }
    if(n==2 && ele>yy) {
        alertActive(n);
        alert[n].innerHTML = `wrong format`;
        return false
    }
    if(n==2 && ele.length != 4) {
        alertActive(n);
        alert[n].innerHTML = `wrong format. length must be 4 character`;
        return false
    }

    alert[n].innerHTML = `&nbsp;`;
    inputs[n].removeAttribute('style');
    labels[n].removeAttribute('style');
    return ele;
}