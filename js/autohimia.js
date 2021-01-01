
let himia = document.getElementById('auto-himia');

let boxHimia = document.createElement('div');
boxHimia.setAttribute('id', 'autohimia');
himia.appendChild(boxHimia);

//--------------------------------------------------------------------------

class autohimia {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    };
    
    render() {
        let linkHimia = document.createElement('a');
        linkHimia.innerHTML = this.name;
        linkHimia.setAttribute('href', this.href);

        return linkHimia;
    };
}

let catHimia = [
    new autohimia('Автокосметика', 'autohimia.html'),
    new autohimia('Аэрозольные краски', 'autoelectrica.html'),
    new autohimia('Автохимия для Автомоек', 'vihlop.html'),
    new autohimia('Клей и герметики', 'dvigatel.html'),
    new autohimia('Профессиональные краски для авто', 'conditioner.html'),
    new autohimia('Охлаждающие жидкости', 'kuzov.html'),
    new autohimia('Тормозная жидкость', 'masla.html'),
    new autohimia('Смазки', 'osvescjenie.html'),
    new autohimia('Термостойкая краска', 'otop-vent.html'),
    new autohimia('Промывочные спрей для авто', 'steplenie.html'),
    new autohimia('Для стекол', 'rulevoe.html'),
    new autohimia('Защита от коррозии', 'interier.html'),
    
];


function renderHimia() {
    let wrap = document.getElementById('autohimia');
 
    catHimia.forEach(
        
      it => {wrap.appendChild(it.render())}
       
    )
    
    himia.appendChild(wrap);

}
renderHimia('#himia');


//boxAuto.appendChild(boxCategory);

