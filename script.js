let divEl = document.getElementById('container');
let selectedState = 'ALL';
const listOfStates = ['all', 'ka', 'ts'];
const selectList = document.getElementsByClassName('minimal')[0];
const changeState = (e) => {
    selectedState =  selectList[e.target.selectedIndex].value;
    prepHTML();
}
const helplines = {
    ALL:[{"name": 'National Emergency Helpline',
    "number": 112,
    "image": './Images/nationalemergency.png'
},{"name":  'police helpline',
    "number": 100,
    "image": './Images/police.png'
},{"name": 'fire Helpline',
    "number": 101,
    "image": './Images/fire.png'
},{"name": 'ambulance Helpline',
    "number": 102,
    "image": './Images/ambulance.png'
},{"name": 'women  Helpline',
    "number": 1091,
    "image": './Images/womenhelpline.png'
},{"name": 'women Helpline(domestic)',
    "number": 181,
    "image": './Images/womendomestic.png'
},{"name": 'aids  Helpline',
    "number": 1097,
    "image": './Images/aids.png'
},{"name": 'disaster management helpline',
    "number": 108,
    "image": './Images/disaster.png'
},{"name": 'medical helpline',
    "number": 108,
    "image": './Images/medical.png'
},{"name": 'anti poison ( new delhi)  Helpline',
    "number": 1066,
    "image": './Images/antipoison.png'
},{
    "name": 'kisan  call center',
    "number": 1551,
    "image": './Images/kissan.png'
},{"name": 'railway accident emergency service',
    "number": 1072,
    "image": './Images/railwayaccident.png'
},{
    "name": 'road accident emergency services',
    "number": 1073,
    "image": './Images/roadaccident.png'
},{ "name": 'senior citizen helpline',
    "number" : '1091,1291',
    "image" : './Images/senior.png'
},{
    "name": 'relief commissioner for natural calamities Helpline',
    "number": 1070,
    "image": './Images/naturaldisaster.png'
},{
    "name": 'earthquake or flood or disaster Helpline',
    "number": '011-2436260',
    "image": './Images/earthquake.png'
},{"name": 'tourist Helpline',
    "number": 1363,
    "image": './Images/tourist.png'
},{"name": 'electricity complaint Helpline',
    "number": 155333,
    "image": './Images/electricity.png'
},{"name": 'water supply Helpline',
    "number": 155313,
    "image": './Images/watersupply.png'
},{"name": 'railway enquiry Helpline',
    "number": '131/135',
    "image": './Images/railwayenquiry.png'
},{"name": 'railway reservationHelpline',
    "number": 139,
    "image": './Images/railwayreservation.png'
},{"name": 'free service ambulance Helpline',
    "number": 102,
    "image": './Images/freeserviceambulance.png'
},{"name": 'crime stopper helpline',
    "number": 1090,
    "image": './Images/crimestopper.png'
},{"name": 'traffic help Helpline',
    "number": 1073,
    "image": './Images/traffic.png'
}]
, KA:[{
    name: 'citizens call center',
    number: 155300,
    image: './Images/senior.png'
},{
    name: 'child Helpline',
    number: 1098,
    image: './Images/child.png'
},{
    name: 'women Helpline',
    number: 1091,
    image: './Images/womenhelpline.png'
},{
    name: 'rescue and relief Helpline',
    number: 1070,
    image: './Images/reliefandrescue.png'
},{
    name: 'crime stopper Helpline',
    number: 1090,
    image: './Images/crimestopper.png'
},{
    name: 'ambulance Helpline',
    number: '102/108',
    image: './Images/ambulance.png'
}],
TS: [{
    name: 'state control room Helpline',
    number: 1070,
    image: './Images/statecontrol.png'
},{
    name: 'collectorate Helpline',
    number: '040-23202113',
    image: './Images/collectorate.png'
},{
    name: 'police control room Helpline',
    number: 100,
    image: './Images/police.png'
},{
    name: 'accident Helpline',
    number: 108,
    image: './Images/roadaccident.png'
},{
    name: 'fire and rescue Helpline',
    number: 101,
    image: './Images/fire.png'
},{
    name: 'ambulance Helpline',
    number: 102,
    image: './Images/ambulance.png'
},{
    name: 'child Helpline',
    number: 1098,
    image: './Images/child.png'
},{
    name: 'disaster Helpline',
    number: 1077,
    image: './Images/disaster.png'
}],
DL: [{
    name: 'disaster Helpline',
    number: 1077,
    image: './Images/disaster.png'
},{
    name: 'women Helpline',
    number: 1091,
    image: './Images/womenhelpline.png'
},{
    name: 'child Helpline',
    number: 1098,
    image: './Images/child.png'
},{
    name: 'door step delivery Helpline',
    number: 1076,
    image: './Images/doorstepdelivery.png'
},{
    name: 'police helpline ',
    number: 100,
    image: './Images/police.png'
},{
    name: 'fire and rescue Helpline',
    number: 101,
    image: './Images/fire.png'
},{
    name: 'ambulance Helpline',
    number: 102,
    image: './Images/ambulence.png'
}
],
MH: [
    {
            name: 'citizens call centre Helpline',
            number: 155300,
            image: './Images/senior.png'
        },{
            name: 'child Helpline',
            number: 1098,
            image: './Images/child.png'
        },{
            name: 'women Helpline',
            number: 1091,
            image: './Images/womenhelpline.png'
        },{
            name: 'crime stopper Helpline',
            number: 1090,
            image: './Images/crimestopper.png'
        },{
            name: 'rescue and relief Helpline',
            number: 1070,
            image: './Images/reliefandrescue.png'
        },{
            name: 'ambulance Helpline',
            number: '102,108',
            image: './Images/ambulance.png'
        },{
            name: 'police Helpline',
            number: 100,
            image: './Images/police.png'
        },{
            name: 'railway Helpline',
            number: 23004000,
            image: './Images/railwayenquiry.png'
        },{
            name: 'NIC service desk Helpline',
            number: 1800-111-555,
            image: './Images/nice.png'
        },{
            name: 'election Helpline',
            number: 1950,
            image: './Images/election.png'
        }
    ]


}

const prepHTML = () => {
    let html = '';
    helplines[selectedState].map((val => {
        html += `<main class="l-card" >
        <section class="l-card__user">
            <div class="l-card__userImage">
                <img src=${val.image} alt="Naruto">
            </div>
            <div class="l-card__userInfo">
                <span>${val.name}</span>
                <a class="alink" href="tel:+${val.number}">${val.number}</a>
            </div>
        </section>
    </main>`
    }));
    divEl.innerHTML = html;
}

prepHTML();
