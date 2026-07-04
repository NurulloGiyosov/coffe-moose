// burger menu
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')

burger.addEventListener('click', () =>{
    burger.classList.toggle('burger-menu--active')
    menu.classList.toggle('header__nav--active')
    const logo = document.querySelector('.logo')
    logo.classList.toggle('logo--visibili')

    if(menu.classList.contains('header__nav--active')){
        document.body.classList.add('no-scroll')
    }else{
        document.body.classList.remove('no-scroll')
    }
})

// ------------- section popular card -------------
window.addEventListener('click', (event) =>{
    const card = event.target.closest('.popular__card')
    if(!card) return;

    const btnAdd = card.querySelector('.popular-card__add')
    const counterWrapperBtn = card.querySelector('.counter-btn') 
    const current = card.querySelector('.counter-btn__current')

    if(event.target.closest('.popular-card__add')){
        btnAdd.classList.add('popular-card__add--active')
        counterWrapperBtn.classList.remove('counter-btn--active')
        if(current) current.textContent = 1
    }

    if(event.target.closest('.counter-btn__plus')){
        let count = parseInt(current.textContent) || 1
        current.textContent = count + 1
    }

    if(event.target.closest('.counter-btn__minus')){
        let count = parseInt(current.textContent) || 1

        if(count === 1){
            btnAdd.classList.remove('popular-card__add--active')
            counterWrapperBtn.classList.add('counter-btn--active')
        }else{
            current.textContent = count - 1
        }  
    }
})

// ------------- section odds slider ----------------


const tracks = document.querySelectorAll('.slider-container__slider-track')
const items = document.querySelectorAll('.slider-container__slider-item')
const dots = document.querySelectorAll('.slider-container__dot-item')

const totalItems = items.length
let currentIndex = 0

function updetSlider(){
    dots.forEach((dot, index) =>{
        if(index === currentIndex){
            dot.classList.add('dot--active')
        }else{
            dot.classList.remove('dot--active')
        }
    })

    if(tracks.length > 0){
        tracks[0].style.transform = `translateX(-${currentIndex * 100}%)`
    }
}
function nextSlider(){
    if(currentIndex < totalItems - 1){
        currentIndex++
    }else{
        currentIndex = 0
    }

    updetSlider()
}

let autoSlider = setInterval(nextSlider, 2000)

// --------------- section offices ---------------

const officesItem = document.querySelectorAll('.offices__item')
const bottomSheet = document.querySelector('.bottom-sheet')
const dragHandle = document.querySelector('.bottom-sheet__drag-handle')
const bottomSheetContent = document.querySelectorAll('.bottom-sheet__content')

if(dragHandle || bottomSheet){
    let startY = 0
    let currentY = 0
    let isDragging = false

    // Открытие по книку на филиал
    officesItem.forEach(item =>{
        item.addEventListener('click', () =>{
            const id = item.dataset.office

            // Убираем активный контент у всех
            bottomSheetContent.forEach(content =>content.classList.remove('bottom-sheet__content--active'))

            // Включаем нужный контент
            document.querySelector(`.bottom-sheet__content[data-office = "${id}"]`).classList.add('bottom-sheet__content--active')

            // Откыриваем само шторку
            bottomSheet.classList.add('bottom-sheet--active')

        })
    })

    // Закрытие
    function closeBottomSheet() {
        bottomSheet.classList.remove('bottom-sheet--active')

        setTimeout(() =>{
            bottomSheet.style.transform = ''
        }, 300)

    }

    // Логика закрытие свайпа вниз

    dragHandle.addEventListener('touchstart', (e) =>{
        startY = e.touches[0].clientY
        isDragging = true
        bottomSheet.style.transition = 'none'
    })

    document.addEventListener('touchmove', (e) =>{
        if(!isDragging) return
        currentY = e.touches[0].clientY - startY

        if(currentY > 0){
            bottomSheet.style.transform = `translateY(${currentY}px)`
        }
    })

    document.addEventListener('touchend', (e) =>{
        if(!isDragging) return
        isDragging = false
        bottomSheet.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'

        if(currentY > 100){
            bottomSheet.style.transform = 'translateY(100%)'
            setTimeout(() => closeBottomSheet(), 300)
        }else{
            bottomSheet.style.transform = 'translateY(0)'
        }
        currentY = 0

    })
}
