// Логика активации табов по клику. Начало
let cabinetTabs = document.getElementById('cabinet-box-tabs'),
    cabinetContents = document.querySelectorAll('.form');

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
// Конец
