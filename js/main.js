//Input Spinner

document.querySelector('.js-multipli').setAttribute('disabled', 'disabled')
let elInput;
document.querySelector('.js-add').addEventListener('click', function() {
    elInput = document.querySelector('.js-input').value;
    elInput++;
    document.querySelector('.js-input').value = elInput
    if (elInput > 1) {
        document.querySelector('.js-multipli').removeAttribute('disabled')
        document.querySelector('.js-multipli').classList.remove('disabled')
    }
})
document.querySelector('.js-multipli').addEventListener('click', function() {
        elInput = document.querySelector('.js-input').value;
        elInput--;
        document.querySelector('.js-input').value = elInput
        if (elInput == 1) {
            document.querySelector('.js-multipli').setAttribute('disabled', 'disabled')
        }
    })
    //Input Spinner end...

//handleClick start

let elOneImg = document.querySelector('.ones-img')
let bigImg = document.querySelector(".big-img")
let bigList = document.querySelector('.js-list')


function handlClick(evt) {

    bigImg.src = evt.target.src

}
bigList.addEventListener('click', handlClick)

//handleClick end...


//handleBasket start
let elBask = document.querySelector('.js-basket')
let imgSpan = document.querySelector('.js-span')


function handleBasket(evt) {

    console.log(imgSpan.classList.add('span-circle'))

}
elBask.addEventListener('click', handleBasket)

//handleBasket end...

//handleHeart start 

let elHeart = document.querySelector('.js-heart')
let elBtnHeart = document.querySelector('.js-circleHeart')



function handleHeart(evt) {

    elHeart.classList.add('span-heart')

}
elBtnHeart.addEventListener('click', handleHeart)

//handleHeart end...

//handleFollow start

let foterBtn = document.querySelector('.js-footer')
let headPerson = document.querySelector('.js-person')


function handleDefault(evt) {

    evt.preventDefault()
    headPerson.classList.add('span-person')

}
foterBtn.addEventListener('click', handleDefault)