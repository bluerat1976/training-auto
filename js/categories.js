
let boxAuto = document.getElementById('content-auto');

let boxCategory = document.createElement('div');
boxCategory.setAttribute('id', 'parts-category');
boxAuto.appendChild(boxCategory);

//--------------------------------------------------------------------------

class PartsCategory {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    };
    
    render() {
        let linkCategory = document.createElement('a');
        linkCategory.innerHTML = this.name;
        linkCategory.setAttribute('href', this.href);

        return linkCategory;
    };
}

let categories = [
    new PartsCategory('Автохимия', 'autohimia.html'),
    new PartsCategory('Автоэлектрика', 'autoelectrica.html'),
    new PartsCategory('Выхлопная система', 'vihlop.html'),
    new PartsCategory('Двигатель', 'dvigatel.html'),
    new PartsCategory('Кондиционер', 'conditioner.html'),
    new PartsCategory('Кузов', 'kuzov.html'),
    new PartsCategory('Масла', 'masla.html'),
    new PartsCategory('Освещение', 'osvescjenie.html'),
    new PartsCategory('Отопление/вентиляция', 'otop-vent.html'),
    new PartsCategory('Передача / сцепление', 'steplenie.html'),
    new PartsCategory('Рулевое управление', 'rulevoe.html'),
    new PartsCategory('Салон автомобля', 'interier.html'),
    new PartsCategory('Система безопасности', 'autohimia.html'),
    new PartsCategory('Система зажигания', 'autohimia.html'),
    new PartsCategory('Система охлаждения', 'autohimia.html'),
    new PartsCategory('Стекла / Система очистки стекол', 'autohimia.html'),
    new PartsCategory('Тех жидкости', 'autohimia.html'),
    new PartsCategory('Топливная система', 'autohimia.html'),
    new PartsCategory('Тормозная система', 'autohimia.html'),
    new PartsCategory('Уход за автомобилем', 'autohimia.html'),
    new PartsCategory('Фильтры', 'autohimia.html'),
    new PartsCategory('Ходовая часть', 'autohimia.html'),
    new PartsCategory('Авто Электроника', 'autohimia.html'),
];

function renderCategories() {
    let wrapper = document.getElementById('parts-category');
 
    categories.forEach(
        
      item => {wrapper.appendChild(item.render())}
       
    )
    
        boxAuto.appendChild(wrapper);

}
renderCategories('#boxAuto');


//boxAuto.appendChild(boxCategory);

