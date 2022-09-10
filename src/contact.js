import './contact.css';

export function contact() {

    const main = document.createElement('div');
    main.classList.add('main');

    const info = document.createElement('div');
    info.classList.add('info');

    const inq = document.createElement('p');
    inq.innerHTML = 'For any inquiries, email us at tacosdelgallito@email.com or call us at 55-1234-5678';
    // const email = document.createElement('em');
    // email.innerHTML = 'tacosdelgallito@email.com';
    // const phone = document.createElement('p');
    // phone.innerHTML = '55-1234-5678';
    
    info.appendChild(inq);

    const hours = document.createElement('p');
    hours.innerHTML = "Hours: Monday - Saturday, 7:00 AM - 02:00 AM";

    info.appendChild(hours);
    // info.appendChild(email);
    // info.appendChild(phone);
    // add email, phone, hours, location
    //follow our social media as well!

    main.appendChild(info);


    const mapHeader = document.createElement('h2');
    mapHeader.innerHTML = 'Our Location';
    main.appendChild(mapHeader);

    const address = document.createElement('h2');
    address.innerHTML = "División Del Norte, Xola Y, Benito Juárez, 03103 CDMX, Mexico";
    main.appendChild(address);

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map');
    main.appendChild(mapDiv);

    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmdgQbmoBLRZvzu3QOzRUVuweFBiQU_q8&callback=initMap';
    script.async = true;

    main.appendChild(script);

    return main;
}

let map; 

function initMap() {
    
    const mapDiv = document.querySelector('.map');
    const loc = { lat: 19.398247623690416, lng: -99.16989096509676 };

    map = new google.maps.Map(mapDiv, {zoom: 12, center: loc});
    const marker = new google.maps.Marker({ position: loc, map: map });

    console.log('map');
        
};

window.initMap = initMap;