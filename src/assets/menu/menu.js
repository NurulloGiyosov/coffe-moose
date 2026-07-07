const indicator = document.querySelector('.menu-tabs__indicator')
const tabsItem = document.querySelectorAll('.menu-tabs__item')
function moveIndicator(clickedBtn){

    const tabsRect = clickedBtn.parentElement.getBoundingClientRect()
    const btnRect = clickedBtn.getBoundingClientRect()
    const indicatorRect = indicator.getBoundingClientRect();

    const left = btnRect.left - tabsRect.left + (btnRect.width / 2) - (indicatorRect.width / 2)

    indicator.style.left = `${left}px`
}

tabsItem.forEach(btn =>{
    btn.addEventListener('click', () =>{
        tabsItem.forEach(item => item.classList.remove('menu-tabs__item--active'))
        btn.classList.add('menu-tabs__item--active')

        moveIndicator(btn)

        const category = btn.dataset.category
        console.log(category)
        renderMenuByCategory(category)
    })
})
window.addEventListener('load', () =>{
    const active = document.querySelector('.menu-tabs__item--active')
    if(active) {
        moveIndicator(active)
        const defaultCategory = active.dataset.category
        renderMenuByCategory(defaultCategory)
    }
})
const menuData = {
    dish: [
    {
        img: '../images/coffee.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "dish",
    },
    {
        img: '../images/Photo Pizza.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "dish",
    },
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "dish",
    
    },
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "dish",
    }
        ], 
    cake: [
    {
       img: '../images/Photo Pizza.png',
        title: 'Photo Pizza',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "cake", 
    },
    {
       img: '../images/coffee.png',
        title: 'coffee',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "cake",  
    }


        ], 
    drinks: [

    {
       img: '../images/coffee.png',
        title: 'coffee',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "drinks",  
    },
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "drinks", 
    },
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "drinks", 
    },


        ],
    desserts: [
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "desserts",   
    },
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "desserts",   
    }
        ],
    drinks2: [
    {
        img: '../images/Homemade-Cappuccino.png',
        title: 'Homemade-Cappuccino',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "drinks", 
    },
    {
        img: '../images/coffee.png',
        title: 'coffee',
        rating: 4.7,
        price: '56c',
        desc: `Shrimp marinated in zesty lime juice,
                mixed with crisp onions, tomatoes, and cilantro`,
        category: "drinks", 
    },


        ],
}
// const dish = [
//     {
//         img: '../images/Homemade-Cappuccino.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "dish",
//     },
//     {
//         img: '../images/Photo Pizza.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "dish",
//     },
//     {
//         img: '../images/Homemade-Cappuccino.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "dish",
    
//     },
//     {
//         img: '../images/Homemade-Cappuccino.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "dish",
//     }
// ]

// const cake = [
//     {
//        img: '../images/Photo Pizza.png',
//         title: 'Photo Pizza',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "cake", 
//     },
//     {
//        img: '../images/coffee.png.png',
//         title: 'coffee',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "cake",  
//     }


// ]

// const drinks = [
//     {
//         img: '../images/Homemade-Cappuccino.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "drinks", 
//     },
//     {
//         img: '../images/Homemade-Cappuccino.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "drinks", 
//     },


// ]

// const desserts = [
//     {
//         img: '../images/Homemade-Cappuccino.png',
//         title: 'Homemade-Cappuccino',
//         rating: 4.7,
//         price: '56c',
//         desc: `Shrimp marinated in zesty lime juice,
//                 mixed with crisp onions, tomatoes, and cilantro`,
//         category: "drinks",   
//     }
// ]

function createCardHtml(item){
    return `<button class="tab-content__card">
        
                <div class="tab-content__wrapper-img">
                    <img src="${item.img}" alt="" class="tab-content__img">
                </div>
                <div class="tab-content__body">
                    <h2 class="tab-content__title">${item.title}</h2>
                    <div class ="tab-content__meta">
                        <span class="tab-content__rating">${item.rating}</span>
                        <span class="tab-content__price">${item.price}</span>
                    </div>
                </div>
                <p class="tab-content__desc">${item.desc}</p>
            </button>`
}

function renderMenuByCategory(categoryName){
    const tabContent = document.querySelector('.tab-content')
    console.log(tabContent)

    if(tabContent){
        const currentArray = menuData[categoryName]
        console.log(currentArray)
    
        if(currentArray){
            tabContent.innerHTML = currentArray.map(item => createCardHtml(item)).join('')
        }
    }

}



