let campers;
let filteredCampers;

window.onload = function() {
    const camperSearch = document.getElementById('camperSearch');
    camperSearch.addEventListener('input', function() { filter(); });
    fetch('./data/campers.json').then(result => {return result.json()}).then(json => {campers = json; filter()}).catch(error => console.log(error))
}



function addCamper(camper){
    const camperTemplate = document.getElementById("camperTemplate").content.cloneNode(true);
    camperTemplate.querySelector(".name").innerText = camper.firstName + " " + camper.lastName;
    camperTemplate.querySelector(".email").innerText = camper.email;
    camperTemplate.querySelector(".allergies").innerText = camper.allergies;
    camperTemplate.querySelector(".phone").innerText = camper.phone;
    document.getElementById("camperContainer").appendChild(camperTemplate);
}

function filter() {
    const year = document.getElementById('year').value;
    const searchValue = document.getElementById('camperSearch').value;
    document.getElementById('camperContainer').innerHTML = "";
    filteredCampers = [...campers];

    filteredCampers = filteredCampers.filter((camper) => Number(camper.date.slice(camper.date.length -4)) + 1 == year)

    if(searchValue){
        filteredCampers = filteredCampers.filter((camper) => (camper.firstName + " " + camper.lastName).toLowerCase().includes(searchValue.toLowerCase()))
    }

    filteredCampers.forEach(camper => {
        addCamper(camper);
    })
}





