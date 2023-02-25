let sectionBody = document.querySelector("#SBody");
let sectionBody2 = document.querySelector("#SBody2");

let Tarih = new Date();
let todayIndex = (Tarih.getDay())-1;


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((e,i) => {
        let day = e.day;
        let amount = e.amount;

        let dayClass;
        if(i==todayIndex){
            dayClass = `class='today'`;
        }else {
            dayClass = "";
        }

        let divHeigt = (Math.ceil(amount)) * 3;
        console.log(divHeigt);
        
        let dayHTML = dayElementsFunc(day);
        let amountHTML = amountElementsFunc(amount,dayClass,divHeigt);

        sectionBody.innerHTML += amountHTML;
        sectionBody2.innerHTML += dayHTML;
        
    });
  });

  let dayElementsFunc = (amount) => {
    let amountElements = `<span class='days'>${amount}</span>`;
    return amountElements;
  }

  let amountElementsFunc = (amount,dayClass,divHeigt) => {
    let dayElements = `<div ${dayClass} style='height: ${divHeigt}px'><span class='percent'>$${amount}</span></div>`;
    return dayElements;
  }