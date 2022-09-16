import './menu.css'
// import Asada from './images/asada.jpeg'
// import Pollo from './images/pollo.jpeg'
// import Carnitas from './images/carnitas.jpeg'
// import Pastor from './images/pastor.jpeg'
//import images of each meat

export default function menu() {

    const main = document.createElement('div');
    main.classList.add('main');

    const header = document.createElement('h2');
    header.innerHTML = "Our meats";

    const meatlist = document.createElement('div');
    meatlist.classList.add('meatlist');

    let tempCount = 0;
    function meatMaker(myHeader, myDesc) {
        const meat = document.createElement('div');
        meat.classList.add('meats');
        const meatHeader = document.createElement('h2')
        meatHeader.innerHTML = myHeader;
        meat.appendChild(meatHeader);

        // const imgDiv = document.createElement('div');
        // imgDiv.classList.add('imgDiv');
        // const meatIcon = new Image();
        // meatIcon.src = myIcon;
        // meatIcon.classList.add('meatImage');
        // imgDiv.style.objectFit = "cover";
        // meatIcon.style.height = "200px";
        // meatIcon.style.width = "100%";
        // imgDiv.appendChild(meatIcon);

        // meat.appendChild(imgDiv);

        const meatDesc = document.createElement('p');
        meatDesc.innerHTML = myDesc;
        if (tempCount < 4) {
            meatDesc.style.gridRow = " 1 / 2";
        }
        else {
            meatDesc.style.gridRow = "2 / 3";
        }

        meat.appendChild(meatDesc);
        return meat;
    }

    const bistecDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Bistec', bistecDesc));

    const polloDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Pollo', polloDesc));

    const carnitasDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Carnitas', carnitasDesc));

    const pastorDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Pastor', pastorDesc));

    const cabezaDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Cabeza', cabezaDesc));
    const longanizaDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Longaniza', longanizaDesc));
    const campechanoDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Campechano', campechanoDesc));
    const birriaDesc = 'Lorem Ipsum is slow-cooked for many hours on a low-heat grill';
    meatlist.appendChild(meatMaker('Birria', birriaDesc));

    const priceDiv = document.createElement('div');
    


    main.appendChild(header);
    main.appendChild(meatlist);

    return main;
}
