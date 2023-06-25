// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');
    }
};

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove("show")
    })
})



//counter design
// document.addEventListener('DOMContentLoaded', ()=> {
//     function(id, start, end, duration){
//         let obj = document.getElementById(id),
//         current = start,
//         range = end-start,
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration/range)),
//     }
// });