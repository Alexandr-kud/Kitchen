// Логика активации табов по клику. Начало
let cabinetTabs = document.getElementById('cabinet-box-tabs'),
    cabinetContents = document.querySelectorAll('.form'),
    cabinetBoxContentContainer = document.querySelectorAll('.cabinet-box__content_container');

    function changeClass(el) {
        for(let i = 0; i < cabinetTabs.children.length; i++) {
            cabinetTabs.children[i].classList.remove('active');
        };
        el.classList.add('active');
    };

    cabinetTabs.addEventListener('click', function(e) {
        let currTab = event.target.dataset.btn;
        changeClass(event.target);
        for(let i = 0; i < cabinetContents.length; i++) {
            cabinetContents[i].classList.remove('active');
            if(cabinetContents[i].dataset.content == currTab) {
                cabinetContents[i].classList.add('active');
            }
        }
    });
// дополнительный блок для табов на странице лк, логика поднято с changeClass
    cabinetTabs.addEventListener('click', function(e) {
        let currTab = event.target.dataset.btn;
        changeClass(event.target);
        for(let i = 0; i < cabinetBoxContentContainer.length; i++) {
            cabinetBoxContentContainer[i].classList.remove('active');
            if(cabinetBoxContentContainer[i].dataset.content == currTab) {
                cabinetBoxContentContainer[i].classList.add('active');
            }
        }
    });
// Конец
