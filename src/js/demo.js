
document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownBtnInner = dropDownWrapper.querySelector('.dropdown__button-js');

    dropDownBtn.addEventListener('click', function() {
        dropDownList.classList.toggle('dropdown__list_visible');
    });
    
    dropDownListItems.forEach(function(listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtnInner.innerText = this.innerText;
            dropDownList.classList.remove('dropdown__list_visible');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (e.target !== dropDownBtn){
            dropDownList.classList.remove('dropdown__list_visible');
        };  
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownList.classList.remove('dropdown__list_visible');
        }
    });
});



let checkbox = document.querySelector('.checkbox-js');
let formHide = document.querySelector('.form-group_none-js');

checkbox.addEventListener('click', function() {
    formHide.classList.toggle('form-group_active-js');
});