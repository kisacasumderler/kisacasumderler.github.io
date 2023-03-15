$(window).ready(function () {
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
            $('.Kapsam').append(Card(dataId, imgName, baslik, aciklama, siteUrl, arrowSvg, repUrl, bookBookmark));
        });

        let Kapsam = $(".Kapsam");
        let li = $(".Kapsam li");


        let ToplamYuk = 0;

        let yukHesapla = (n) => {
            for (let i = 0; i <= n; i++) {
                ToplamYuk += li.eq(i).outerHeight(true);
            }
            return ToplamYuk;
        }

        let ulMaxHeightBulD = () => {
            let liMax = (li.length) - 1;
            let li1 = Math.floor(liMax / 3);
            let li2 = Math.floor(liMax / 1.5);

            let li_1 = li.eq(li1) // 3/1 ye kadar 
            let li3_2 = li.eq(li2); // 3/2 ye kadar 
            let li3_3 = li.eq(liMax) // 3/3 e kadar max 

            let li1hesapla = yukHesapla(li1); // 0 - 8
            let li2hesapla = yukHesapla(li2) - li1hesapla; // 0 -17 
            let li3hesapla = yukHesapla(liMax) - li2hesapla; // 0 - 30


            let maxUlHeight = Math.max(li1hesapla, li2hesapla, li3hesapla);
            return maxUlHeight;
        }

        let ulMaxHeightBulM = () => {
            let liMax = (li.length) - 1;
            let li1 = Math.floor(liMax / 2);

            let li2_2 = li.eq(liMax) // 2/2 ye kadar 
            let li2_1 = li.eq(li1); // 2/1 e kadar 

            let li1Hesapla = yukHesapla(li2_1);
            let li2Hesapla = yukHesapla(li2_2) - li1Hesapla;

            let maxUlHeight = Math.max(li1Hesapla, li2Hesapla);
            return maxUlHeight;
        }


        let ulMaxHeightD = ulMaxHeightBulD();
        let ulMaxHeightM = ulMaxHeightBulM();

        let LoadPage = () => {
            if ($(window).outerWidth(true) > 1200) {
                Kapsam.css("height", ulMaxHeightD);
                // desktop 
            }
            if ($(window).outerWidth(true) >= 720 && $(window).outerWidth(true) <= 1200) {
                Kapsam.css("height", ulMaxHeightM);
                // tablet
            }
            if ($(window).outerWidth(true) < 720) {
                Kapsam.css("height", "auto");
                // mobile 
            }
        }

        LoadPage();

        function checkWidth() {
            LoadPage();
        }

        $(window).resize(checkWidth);
    });
    // 

})