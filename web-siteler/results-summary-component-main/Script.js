// data 

let ResultData = document.querySelector("#ResultData");

fetch("./data.json")
.then(x=>x.json())
.then(y=>MyData(y));

function MyData(e){
    e.forEach(element => {
        ShowResult(element)
    });
}

function ShowResult(e){
    let li = `<li class='${e.category}'><img src='${e.icon}'><span>${e.category}</span><span><b>${e.score}</b> <i>/ 100</i></span></li>`;
    ResultData.innerHTML += li;
    console.log(e.category);
}

// window 

let LinkImg = document.querySelector("#LinkImg");

LinkImg.addEventListener('click',()=>{
    window.open("https://github.com/kisacasumderler")
})