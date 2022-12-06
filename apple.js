const body = document.querySelector('body');
const country = document.querySelector('.country');
const countryTop = document.querySelector('.country__select-top');
const countryBottom = document.querySelector('.country__select-bottom');
const countryCheck = document.querySelectorAll('.select div .country__check');
const selectors = document.querySelectorAll('.select div');
const select = document.querySelector('.select')
const countryExit = document.querySelector('.country__exit');
const countryEnter = document.querySelector('.country__enter');


countryTop.addEventListener('click',()=>{
    select.style.flexFlow='column';
    countryBottom.classList.remove('check');
    countryTop.classList.add('check');
    countryTop.style.borderRadius = 8 + 'px';

    if(countryBottom.classList.contains('active')){
        countryBottom.classList.remove('active');
        countryBottom.classList.remove('clicked1');
        countryTop.style.borderTopLeftRadius= 8 + 'px';
        countryTop.style.borderTopRightRadius= 8 + 'px';
        countryBottom.style.borderRadius = 8 + 'px';
        countryBottom.style.borderTopLeftRadius = 0;
        countryBottom.style.borderTopRightRadius = 0;
    }else{
        countryTop.style.borderBottomLeftRadius= 0;
        countryTop.style.borderBottomRightRadius= 0;
        countryBottom.classList.add('active');
    }
})

countryBottom.addEventListener('click',()=>{
    select.style.flexFlow='column-reverse';
    countryTop.classList.remove('check');
    countryBottom.classList.add('check');
    countryBottom.style.borderRadius = 8 + 'px';
    
    if(countryTop.classList.contains('active')){
        countryTop.classList.remove('active');
        countryTop.classList.remove('clicked2');
        countryBottom.style.borderTopLeftRadius= 8 + 'px';
        countryBottom.style.borderTopRightRadius= 8 + 'px';
        countryTop.style.borderRadius = 8 + 'px';
        countryTop.style.borderTopLeftRadius = 0;
        countryTop.style.borderTopRightRadius = 0;
    }else{
        countryBottom.style.borderBottomLeftRadius= 0;
        countryBottom.style.borderBottomRightRadius= 0;
        countryTop.classList.add('active');
    }
})

countryExit.addEventListener('click',()=>{
    country.classList.add('hidden');
})

countryEnter.addEventListener('click', (e)=>{
    e.preventDefault()
    country.classList.add('hidden')
})

// header

const headerSearch = document.querySelector('.header__search');
const search = document.querySelector('.search');
const searchContent = document.querySelector('.search__content');
const searchExit = document.querySelector('.search__exit');
const searchArea = document.querySelector('.search__area');
const bagBtn = document.querySelector('.header__bag');
const bag = document.querySelector('.bag');

headerSearch.addEventListener('click', ()=>{
    search.classList.add('active');
    window.scrollTo({
        top: search.clientTop
    })
    body.style.overflowY='hidden';
    searchContent.classList.add('active');
    searchArea.focus()
})

searchExit.addEventListener('click',()=>{
    search.classList.remove('active');
    searchContent.classList.remove('active');
    searchArea.value = '';

    body.style.overflowY='auto';
})

bagBtn.addEventListener('click', ()=>{
    bag.classList.toggle('active');
})

// scroll

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 10){
        country.classList.add('hidden')
    }
})


// slider

const sliderLine = document.querySelector('.slider__line');
const slider = document.querySelectorAll('.slider');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');
const list = document.querySelectorAll('.list');

let count = 0;
let acc = 0;

prev.addEventListener('click', ()=>{
    count -= 987.5;
    acc -= 1;

    if(count < 0){
        count = 10862.5 - 987.5;
        acc = 10;
    }

    list.forEach(el=>{
        el.classList.remove('active');
    })

    list[acc].classList.add('active');
    sliderLine.style.transform = `translateX(-${count}px)`;
})

next.addEventListener('click', ()=>{
    count += 987.5;
    acc +=1;

    if(count >= 10855){
        count = 0;
        acc = 0;
    }

    list.forEach(el=>{
        el.classList.remove('active');
    })

    list[acc].classList.add('active');
    sliderLine.style.transform = `translateX(-${count}px)`;
})

list.forEach((el, i)=>{
    el.addEventListener('click', ()=>{
        count = i * 987.5;

        sliderLine.style.transform=`translateX(-${count}px)`;
        
        list.forEach(el=>{
            el.classList.remove('active');
        })

        el.classList.add('active');
    })
})
