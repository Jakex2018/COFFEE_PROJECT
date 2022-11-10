let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
}

let items = document.querySelector('.item-content');

document.querySelector('#cart-btn').onclick = () =>{
    items.classList.toggle('active');
    searchForm.classList.remove('active');
}

let navigator = document.querySelector('.navigator');

document.querySelector('#menu-btn').onclick = () =>{
    navigator.classList.toggle('active');
    searchForm.classList.remove('active');
    items.classList.remove('active');
}
