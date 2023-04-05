let  isValidEmail = (email) => {
    if (!email) {
      return false;
    }
    if (email.indexOf('.com') === -1) {
      return false;
    }
    if (email.indexOf('@') === -1) {
      return false;
    }
    if (/[\u0080-\uFFFF]/.test(email)) {
      return false;
    }
    if(email.includes(' ')) {
      return false;
    }
    
    return true;
  }
  
  let formOk = document.querySelector('#formOk');
  let email = document.querySelector('#email');
  let danger = document.querySelector('.danger');

  formOk.addEventListener('click',(e)=>{
    let formControl = isValidEmail(email.value);
    if(formControl == true) {
        danger.removeAttribute('style');
        email.style.borderColor = 'green';
    }else {
        danger.style.opacity = '1';
        email.style.borderColor = '#ff4242';
        e.preventDefault();
    }
  });

  