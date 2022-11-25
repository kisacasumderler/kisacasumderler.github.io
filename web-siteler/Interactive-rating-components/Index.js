const form_item = document.querySelectorAll(".form-item"),
    labels = document.querySelectorAll("label"),
    boxItem = document.querySelector(".box-item"),
    t_state = document.querySelector(".t_state"),
    s_result = document.getElementById("s_result"),
    formId = document.forms["feedback"],
    sec = formId["sec"];

const clear_e = (i)=>{
    form_item.forEach((e)=>{
        e.style.background = "";
    });
    labels.forEach((e)=>{
        e.style.color = "";
    })
}

form_item.forEach((e,i)=>{
    if(i<5){
        e.addEventListener("click",()=>{
            clear_e();
            e.style.background = "hsl(217, 12%, 63%)";
            labels[i].style.color = "#fff";
        });
    }
});

formId.onsubmit = (event)=>{
    event.preventDefault();
    form_item.forEach((e)=>{
        e.style.display = "none";
    })
    boxItem.style.display = "none";
    t_state.style.display = "flex";
    s_result.innerHTML = sec.value;
}