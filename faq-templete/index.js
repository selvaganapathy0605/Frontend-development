const plusminus = document.querySelectorAll('.plus-minus');
const question = document.querySelectorAll('.ques-outerbox');


plusminus.forEach((i)=>{
    i.addEventListener('click',()=>{
        if(i.classList[1] === 'minus' ){
            const parentelement = i.parentElement.parentElement;
            const pasageElement = parentelement.querySelector('.answer');
            pasageElement.style.display = 'none';
            i.src = './assets/images/icon-plus.svg'
            i.classList.remove('minus');
            i.classList.add('plus');
        }else if (i.classList[1] === 'plus'){
            const parentelement = i.parentElement.parentElement;
            const pasageElement = parentelement.querySelector('.answer');
            pasageElement.style.display = 'block';
            i.src = './assets/images/icon-minus.svg'
            i.classList.remove('plus');
            i.classList.add('minus');
        }
    })
})


question.forEach((i)=>{
    i.addEventListener('dblclick',()=>{
        const imgElement = i.children[0].children[1];
        if(imgElement.classList[1] === 'minus'){
            const pasageElement = i.querySelector('.answer');
            pasageElement.style.display = 'none';
            imgElement.src = './assets/images/icon-plus.svg';
            imgElement.classList.remove('minus');
            imgElement.classList.add('plus');
        }else if(imgElement.classList[1] === 'plus'){
            const pasageElement = i.querySelector('.answer');
            pasageElement.style.display = 'block';
            imgElement.src = './assets/images/icon-minus.svg';
            imgElement.classList.remove('plus');
            imgElement.classList.add('minus');
        }  
    })
})