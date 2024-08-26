const mail = document.querySelector('#email');
const successCard = document.querySelector('#success-card');
const validationCard = document.querySelector('#validation-card');
const errorMsg = document.querySelector('.error-msg');
const submittButton = document.querySelector('#button1');
const dismissButton = document.querySelector('#button');





submittButton.addEventListener('click',(e)=>{
    if(!validation()){
        e.preventDefault()
    }
    else{
        success()
    }
})

dismissButton.addEventListener('click', () => {
    dissmiss();
})

function validation(){
    if(!mail.value){
        errorMsg.innerText = 'Email is required';
        mail.style.backgroundColor = 'rgba(241, 188, 188, 0.7)';
        mail.style.border = '2px solid red';
        console.log('isempty')
    }
    else if(!validateEmail(mail.value)){
        errorMsg.innerText = 'Valid email is required'
        mail.style.border = '2px solid red';
        mail.style.backgroundColor = 'rgba(241, 188, 188,0.7)';
        console.log('not a valid email')
    } else{
        success();
    }
}

function success(){
        successCard.style.display = 'flex';
        validationCard.style.display = 'none';
}

function dissmiss(){
    successCard.style.display = 'none';
    validationCard.style.display = 'flex';
    mail.value='';
    mail.style.border = '1px solid #706e6e';
    mail.style.backgroundColor = '#fff';
    errorMsg.innerText = ''
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}