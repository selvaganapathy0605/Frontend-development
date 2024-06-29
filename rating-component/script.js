const ratings = document.querySelectorAll('.rate');
const button = document.querySelector('#button');
const ratingCard = document.querySelector('#rating-card');
const thankyouCard =document.querySelector('#thankyou-card');
const scoreBoard = document.querySelector('#result-num');


button.addEventListener('click',(e)=>{
    ratingCard.style.display = 'none';
    thankyouCard.style.display = 'flex';
    
})

ratings.forEach((i)=>{
    i.addEventListener('click',()=>{
        i.style.backgroundColor = 'hsl(25, 97%, 53%)'
        i.style.color = '#000'
        score = i.classList[1]
        scoreBoard.innerText = '';
        scoreBoard.innerText = score;
    })
})