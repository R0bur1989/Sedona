let searchButton = document.querySelector('.jsSearchButton');
let modalSearch = document.querySelector('.modal-search');

searchButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalSearch.classList.toggle('modal-show');
});