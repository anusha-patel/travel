// using javascript for responsive navbar
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-bar');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
    menu.classList.add('active');

});

closeBtn.addEventListener('click',function(){
    menu.classList.remove('active');

});


// jquery for toggle dropdown menus
$(document).ready(function(){
    // toggle sub menu

    $('.sub-btn').click(function(){
        console.log(this)
        $(this).next('.sub-menu').slideToggle();
    });

    // toggle more-menu
    $('.more-btn').click(function(){
        console.log(this)
        $(this).next('.more-menu').slideToggle();
    });

});