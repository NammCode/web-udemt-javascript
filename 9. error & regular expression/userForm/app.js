document.getElementById('name').addEventListener('blur', validName);
document.getElementById('zip').addEventListener('blur', validZip);
document.getElementById('email').addEventListener('blur', validEmail);
document.getElementById('phone').addEventListener('blur', validPhone);

function validName(){
  const name = document.getElementById('name');
  const re = /^[\w ]{3,40}$/;
  if (!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validZip(){
  const zip = document.getElementById('zip');
  const re = /^\w{3}[- ]?\w{3}$/;
  if (!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validEmail(){
  const email = document.getElementById('email');
  const re = /^\w+@\w+.\w{3}$/;
  if (!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validPhone(){
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}[\) .-]?\d{3}[ .-]?\d{4}$/;
  if (!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
