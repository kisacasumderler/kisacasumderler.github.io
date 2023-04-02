let  CartIcon = document.querySelector('.CartIcon'),
cart = document.querySelector('.cart'),
Menu = document.querySelector('#Menu'),
navUl = document.querySelector('nav ul'),
Close = document.querySelector('#Close'),
box = document.querySelector('.box'),
imgPrevClose = document.querySelector('.imgPrevClose'),
prentItemBox = document.querySelectorAll('.prentItemBox'),
thumbnailItemBox = document.querySelectorAll('.thumbnailItemBox'),
prevBox = document.querySelector('.prevBox'),
nextBox = document.querySelector('.nextBox'),
prevImg = document.querySelector('.prevImg'),
nextImg = document.querySelector('.nextImg'),
parentItem = document.querySelectorAll('.parentItem'),
thumbnailItem = document.querySelectorAll('.thumbnailItem'),
ImsPreview = document.querySelector('.ImsPreview'),
body = document.querySelector('body'),
ProductQuantityDOM = document.querySelector('#ProductQuantity'),
minus = document.querySelector('#minus'),
plus = document.querySelector('#plus'),
addToCart = document.querySelector('.addToCart'),
badge = document.querySelector('.badge'),
productInformation = document.querySelector('.productInformation');
removeIcon = `<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="deleteProduct"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
`,
ImgSrc = document.querySelector('.parentItem img').src,
productPrice = parseInt(document.querySelector('#productPrice').innerHTML.slice(1)),
productName = document.querySelector('#productName').innerHTML,
cartButton = document.querySelector('.cartButton');

let x = 0;

CartIcon.addEventListener('click', () => {
    x++;
    if (x % 2 == 0) {
        cart.removeAttribute('style');
    } else {
        cart.style.display = 'block';
    }
});

Menu.addEventListener('click', () => {
    navUl.classList.add('active');
    Close.style.display = 'block';
    box.classList.add('active');
    body.style.overflow = 'hidden';
});

Close.addEventListener('click', () => {
    navUl.classList.remove('active');
    Close.style.display = 'none';
    box.classList.remove('active');
    body.removeAttribute('style');
})

let n = 1;
let maxSize = parentItem.length;


prevImg.addEventListener('click', () => {
    sliderShow(--n, 'x');
});

prevBox.addEventListener('click', () => {
    sliderShow(--n, 'y');
});

nextImg.addEventListener('click', () => {
    sliderShow(++n, 'x');
});

nextBox.addEventListener('click', () => {
    sliderShow(++n, 'y');
});


let clearli = (e, c) => {
    e.forEach(ele => {
        ele.classList.remove(c);
    })
}

let thumbnailAct = (item, val) => {
    item.forEach((ele, indexNo) => {
        ele.addEventListener('click', () => {
            n = indexNo + 1;
            sliderShow(n, val);
        })
    });
}

thumbnailAct(thumbnailItem, 'x');
thumbnailAct(thumbnailItemBox, 'y');

let sliderShow = (i, val) => {
    if (i <= 0) {
        n = maxSize;
    }
    if (i > maxSize) {
        n = 1;
    }
    if (val == 'x') {
        clearli(parentItem, 'active');
        clearli(thumbnailItem, 'active');
        parentItem[n - 1].classList.add('active');
        thumbnailItem[n - 1].classList.add('active');
    }
    if (val == 'y') {
        clearli(prentItemBox, 'active');
        prentItemBox[n - 1].classList.add('active');
        clearli(thumbnailItemBox, 'active');
        thumbnailItemBox[n - 1].classList.add('active');
    }

}

let showImgs;

document.querySelectorAll('.parentItem img').forEach(e => {
    e.addEventListener('click', () => {
        showImgs('add');
    });
});

imgPrevClose.addEventListener('click', () => {
    showImgs('remove');
});


function onWindowResize() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 990) {
        showImgs = (val) => {
            if (val == 'add') {
                box.classList.add('active');
                ImsPreview.classList.add('active');
                body.style.overflow = 'hidden';
            }
            if (val == 'remove') {
                box.classList.remove('active');
                ImsPreview.classList.remove('active');
                body.removeAttribute('style');
            }
        }
        body.removeAttribute('style');
        box.classList.remove('active');
        navUl.classList.remove('active');
        Close.style.display = 'none';
    }
    if (screenWidth <= 990) {
        showImgs = undefined;
    }
}

window.addEventListener("resize", onWindowResize);
onWindowResize();


// cart 

let productQuantity = 0;

minus.addEventListener('click', () => {
    CartQuantitiy(productQuantity--);
});

plus.addEventListener('click', () => {
    CartQuantitiy(++productQuantity);
});

let ClearCart = () => {
    badge.removeAttribute('style');
    cartButton.removeAttribute('style');
    productInformation.innerHTML = `<i>Your Cart is empty.</i>`;
}

let CartQuantitiy = (q) => {
    if (q <= 0) {
        productQuantity = 0;
    }
    ProductQuantityDOM.innerHTML = q;
}

let cartAmount = 0;

addToCart.addEventListener('click',()=> {
    cartAmount += productQuantity;
    makeCart(cartAmount);
    productQuantity = 0;
    ProductQuantityDOM.innerHTML = productQuantity;
})

function makeCart (quantity) {
    if(quantity>0){
        badge.style.display = 'block';
    badge.innerHTML = quantity;
    productInformation.innerHTML = `<img src="${ImgSrc}" alt="">
    <div>
        <h3>${productName}</h3>
            <span>$${productPrice}.00</span> x <span>${quantity}</span> <span id="totalAmount">$${quantity * productPrice}.00</span>
    </div>
${removeIcon}`;

    cartButton.style.display = 'block';

    alertShow('succes');

    // delete Cart

    document.querySelector('#deleteProduct').addEventListener('click',()=>{
        productInformation.innerHTML = `<i>Your Cart is empty.</i>`;
        badge.innerHTML = 0;
        cartButton.removeAttribute('style');
        badge.removeAttribute('style');
        cartAmount = 0;

        alertShow('danger');
    });
    }
}

// button 

addToCart.addEventListener('mousedown',()=>{
    addToCart.style.background = 'green';
});

addToCart.addEventListener('mouseup',()=>{
    addToCart.removeAttribute('style');
});

// alert 

function alertShow (val) {
    if(val == 'succes') {
        document.querySelector('.alert').innerHTML = `${productName} added to cart`;
    }
    if(val == 'danger') {
        document.querySelector('.alert').innerHTML = `${productName} removed to cart`;
    }
    document.querySelector('.alert').classList.add('active');
    document.querySelector('.alert').classList.add(`${val}`);
    setTimeout(()=>{
        document.querySelector('.alert').style.animationName = 'alertClose';
    },1500);
    setTimeout(()=>{
        document.querySelector('.alert').innerHTML = "";
        document.querySelector('.alert').classList.remove('active');
        document.querySelector('.alert').classList.remove(`${val}`);
        document.querySelector('.alert').removeAttribute('style');
    },2000);
}