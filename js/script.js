let menuToggle = document.querySelector('.menuToggle');
let sibebar = document.querySelector('.sidebar');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    sibebar.classList.toggle('active');
}

let Menulist = document.querySelectorAll('.Menulist li');
function activeLink(){
    Menulist.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
Menulist.forEach((item)=>
item.addEventListener('click',activeLink));