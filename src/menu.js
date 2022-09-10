import './menu.css'
import Asada from './images/asada.jpeg'
import Pollo from './images/pollo.jpeg'
import Carnitas from './images/carnitas.jpeg'
import Pastor from './images/pastor.jpeg'
//import images of each meat

export default function menu() {

    const main = document.createElement('div');
    main.classList.add('main');

    // const header = document.createElement('header');
    // header.innerHTML = "Choose your meat";

    const meatlist = document.createElement('div');
    meatlist.classList.add('meatlist');

    function meatMaker(myHeader, myIcon, myDesc) {
        const meat = document.createElement('div');
        meat.classList.add('meats');
        const meatHeader = document.createElement('h2')
        meatHeader.innerHTML = myHeader;
        meat.appendChild(meatHeader);

        const meatIcon = new Image();
        meatIcon.src = myIcon;
        meatIcon.classList.add('meatImage');
        meat.appendChild(meatIcon);

        const meatDesc = document.createElement('p');
        meatDesc.innerHTML = myDesc;
        meat.appendChild(meatDesc);
        return meat;
    }

    const asadaDesc = 'Asada is slow-cooked for 14 hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Asada', Asada, asadaDesc));

    const polloDesc = 'Asada is slow-cooked for 14 hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Pollo', Pollo, polloDesc));

    const carnitasDesc = 'Asada is slow-cooked for 14 hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Carnitas', Carnitas, carnitasDesc));

    const pastorDesc = 'Asada is slow-cooked for 14 hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Pastor', Pastor, pastorDesc));

 //   main.appendChild(header);
    main.appendChild(meatlist);

    return main;
}
