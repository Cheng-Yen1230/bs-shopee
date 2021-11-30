import './style.scss';



import Carousel from 'bootstrap/js/dist/carousel';
import Collapse from 'bootstrap/js/dist/collapse'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import Modal from 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/alert'

import 'bootstrap/js/dist/tab'

// 側邊欄 顯示更多摺疊功能
function controllerMenu(idx) {
    if (idx === 1) {
        let moreIcon = document.getElementById('more-svg')
        let text = document.getElementById('more-text')
        var myCollapse = document.getElementById('collapseExample')
        var bsCollapse = new Collapse(myCollapse, {
        toggle: false
        })
        myCollapse.addEventListener('show.bs.collapse', function() {
            text.innerText = '顯示較少'
            moreIcon.classList.add('transform-rotate-180')
        })
        myCollapse.addEventListener('hide.bs.collapse', function() {
            text.innerText = '顯示較多'
            moreIcon.classList.remove('transform-rotate-180')
        })
    }
    if (idx === 2) {
        let moreIcon = document.getElementById('as-more-svg')
        let text = document.getElementById('as-more-text')
        var myCollapse = document.getElementById('as-collapseExample')
        var bsCollapse = new Collapse(myCollapse, {
        toggle: false
        })
        myCollapse.addEventListener('show.bs.collapse', function() {
            text.innerText = '顯示較少'
            moreIcon.classList.add('transform-rotate-180')
        })
        myCollapse.addEventListener('hide.bs.collapse', function() {
            text.innerText = '顯示較多'
            moreIcon.classList.remove('transform-rotate-180')
        })
    }
    
}

// 啟動
controllerMenu(1)
controllerMenu(2)


// 渲染商品

function renderCard() {
    
    let card = document.getElementById('card-list')
    let resultStr = ''
    for(let i = 0; i <= 23; i++) {
        resultStr += `
        <div class="col mb-2 p-2">
            <div class="mt-0 mt-sm-1">
                <div id='card-p' class="card cursor-pointer position-relative">
                    <img id='img${i}' src="https://bruce-fe-ec.web.app/images/item.png" class="card-img-top" alt="...">
                    <span class="badge bg-primary position-absolute top-0 end-0 fw-normal">雙11優惠</span>
                    <div class="card-body p-2">
                        <p id='content${i}' class="card-text fs-7 text-wrap">霹靂無敵高級香香沐浴乳</p>
                        <h6 id='price${i}' class="card-title text-primary">$199</h6>
                        
                        <p class="card-text d-flex justify-content-between align-items-center">
                            <small class="text-muted">已賣出99</small>
                        
                            <svg id='add-btn${i}' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF5511" class="add-btn bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    card.innerHTML = resultStr

}

// 啟動函式
renderCard()

//  偵測商品點擊位置
function clickProduction() {
    let allProductionNums = document.querySelectorAll('.add-btn')
    let pdNum = allProductionNums.length
    for (let i = 0; i < pdNum; i++) {
        allProductionNums[i].addEventListener('click', function() {
            document.getElementById(`add-btn${i}`)
        })
    }
}
clickProduction()





// 搜尋商品載入

function renderLoadingStyle() {
    let loading = document.getElementById('loading')  // loading
    let search = document.getElementById('search-btn')
    let card = document.getElementById('card-list')
    search.addEventListener('click', function() {
        loading.classList.toggle('d-none')
        card.classList.toggle('d-none')
        setTimeout(function(){ 
            loading.classList.toggle('d-none')
            card.classList.toggle('d-none')
         }, 1500);
        
    })
}
renderLoadingStyle()

// 計算商品數量
function calProduction() {
    let pd = document.getElementById('pd-nums')
    let num = document.getElementsByClassName('pd')
    let result = num.length
    pd.innerText = result
}
calProduction()