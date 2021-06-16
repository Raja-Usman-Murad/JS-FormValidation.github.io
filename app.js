console.log('PROJECT 4');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validemail = false;
let validphone = false;
$('#failure').hide();
$('#success').hide();
// console.log( name,email,phone);

name.addEventListener('blur', () => {
    console.log('name:blured');
    let regex = /^[a-zA-Z]([\s+0-9a-zA-z]){2,20}$/
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('name is valid');
        name.classList.remove('is-invalid');
        validname = true;
    } else {
        console.log('name is not valid');
        name.classList.add('is-invalid');
        validname = false;
    }
})
email.addEventListener('blur', () => {
    console.log('email:blured');
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('email is valid');
        email.classList.remove('is-invalid');
        validemail = true;
    } else {
        console.log('email is not valid');
        email.classList.add('is-invalid');
        validemail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log('phone:blured');
    let regex = /^([0-9]){11}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('phone is valid');
        phone.classList.remove('is-invalid');
        validphone = true;
    } else {
        console.log('phone is not valid');
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you click the button');
    console.log(validname,validemail,validphone);
    if (validname && validemail && validphone) {
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();

    } else {
        console.log('one of is not valid hence not submit.');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();
    }


})