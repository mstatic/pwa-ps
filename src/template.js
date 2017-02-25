const $carCard = document.querySelector('#car-card');
const $gridOnPage = document.querySelector('.mdl-grid');
const $mdlLayoutContent = document.querySelector('.mdl-grid');

function generateCard(car) {
    let template = $carCard.innerHTML;
    let title = `${car.brand} ${car.model} ${car.year}`;

    template = template.replace('{{title}}', title);
    template = template.replace('{{image}}', car.image);
    template = template.replace('{{price}}', car.price);
    return template;
}

function appendCars(cars) {
    let cardHTML = '';

    cars.forEach((car) => {
        cardHTML += generateCard(car.value);
    });

    $gridOnPage.insertAdjacentHTML('beforeend', cardHTML);
    // forceRedrawForIE();
}

function forceRedrawForIE() {
    $mdlLayoutContent.style.display = 'none';
    $mdlLayoutContent.style.display = 'inline-block';
}

export { appendCars };

