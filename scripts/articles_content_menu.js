var articlesMenuBtn = document.querySelector('.articles_drop_btn');
var articlesMenu = document.querySelector('.articles_content_menu'); 

articlesMenuBtn.addEventListener('click', function(){
    articlesMenu.classList.toggle('articles_menu_active');
});