const form = document.querySelector('#form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const mess = document.querySelector('#mess');
const button = document.querySelector('button');
const successMessage = document.querySelector('#popup-mess')
const query = document.getElementsByName("query");
const cheackbox = document.querySelector('#condition');

button.addEventListener('click', (e) => {
    if (!validations()) {
        e.preventDefault();
    }
    displaysuccmess()
})

function displaysuccmess(){
    if(validations()){
        successMessage.style.display = 'block'
    }
}

const validations = () => {
    const firstname = fname.value.trim();
    const lastname = lname.value.trim();
    const message = mess.value.trim();
    const mail = email.value.trim();


    if (firstname === '') {
        errorMessage(fname, 'This field is required *');
    } else {
        successMess(fname);
    }

    if (lastname === '') {
        errorMessage(lname, 'This field is required *');
    } else {
        successMess(lname);
    }

    if (mail === '') {
        errorMessage(email, 'This field is required *');
    } else if (!emailValidations(mail)) {
        errorMessage(email, 'This is not an Email Id');
    } else {
        successMess(email);
    }

    if (!query[0].checked && !query[1].checked) {
        send()
    } else {
        reset_msg()
    }

    if (message === '') {
        errorMessage(mess, 'This field is required *');
    } else {
        successMess(mess);
    }

    if (!cheackbox.checked) {
        const parentelement = document.querySelector('#terms-conditions');
        const errorElement = parentelement.querySelector('.error');
        errorElement.innerText = 'To submit this form, term should be consented *'
    } else {
        errorElement.innerText = ' ';
    }
}

const errorMessage = (e, m) => {
    const parentelement = e.parentElement;
    const errorElement = parentelement.querySelector('.error');
    errorElement.innerText = m;
}

const successMess = (e) => {
    const parentelement = e.parentElement;
    const errorElement = parentelement.querySelector('.error');
    errorElement.innerText = ' ';
}

const emailValidations = (email) => {
    return String(email).toLowerCase().match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);
}


function send() {
    if (query[0].checked == true) {
        console.log('You selected general query')
    } else if (query[1].checked == true) {
        console.log('You selected support query')
    } else {
        var msg = 'Query type is required *'
        const parentelement = document.querySelector('#radio-selector');
        const errorElement = parentelement.querySelector('.error');
        errorElement.innerText = msg;
        return false;
    }
    return true;
}

function reset_msg() {
    const parentelement = document.querySelector('#radio-selector');
    const errorElement = parentelement.querySelector('.error');
    errorElement.innerText = ' ';
}
