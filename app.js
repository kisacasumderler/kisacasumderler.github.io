
            
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


let upButton = document.getElementById("upButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

upButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(window).ready(function () {
    let p_count = $('#p_count').val();
    let arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>`;
    let bookBookmark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z"/></svg>`;

    let Card = (id, imghref, title, paragraph, webPageUrl, webPageIcon, githubRepoUrl, repoIcon) => {
        return `<li id="${id}">
      <div class="icerik">
          <div class="img">
              <img src="./img/${imghref}" alt="">
          </div>
          <div class="text">
              <h1>${title}</h1>
              <p>${paragraph}</p>
          </div>
          <div class="icons">
              <a href="${webPageUrl}">
                  ${webPageIcon}
                  <span>
                      preview site
                  </span>
              </a>
              <a href="${githubRepoUrl}">
                  ${repoIcon}
                  <span>go repo</span>
              </a>
          </div>
      </div>
    </li>`;
    }
    $.getJSON('./data/websiteler.json', function (data) {
        let datas = data[2].data;
        datas.sort(function (a, b) {
            return b.id - a.id;
        })
        $.each(datas, function (key, value) {
            let dataId = value.id;
            let aciklama = value.aciklama;
            let baslik = value.baslik;
            let imgName = value.imgName;
            let repUrl = value.repoUrl;
            let siteUrl = value.siteUrl;

            if(p_count!=='full') {
                if(key<6) {
                    $('.Kapsam').append(Card(dataId, imgName, baslik, aciklama, siteUrl, arrowSvg, repUrl, bookBookmark));
                }
            }else {
                $('.Kapsam').append(Card(dataId, imgName, baslik, aciklama, siteUrl, arrowSvg, repUrl, bookBookmark));
            }
            
        });

        let Kapsam = $(".Kapsam");
        let li = $(".Kapsam li");
    });
    // 
    let container = $('.Kapsam');
    let h = 100;
  
    function Hesaplat () {
        if (container.get(0).scrollWidth > (container.width() + 100)) {
          h += 100;
          $('.Kapsam').css('height', h + 'px');
        }
        if (container.get(0).scrollWidth < container.width()) {
          clearInterval(scrollKontrol);
        }
      }

    const scrollKontrol = setInterval(Hesaplat, 5);

    function checkWidth() {
        location.reload();
    }

    if(p_count== 'none') {
        clearInterval(scrollKontrol);
    }

    $(window).resize(checkWidth);
});