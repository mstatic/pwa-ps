import { appendCars } from './template.js';

var apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
var apiUrlLatest = apiUrlPath + 'latest-deals.php';
var apiUrlCar = apiUrlPath + 'car.php?carId=';

function loadMoreRequest() {
    fetch(apiUrlLatest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            appendCars(data.cars);
        });
}

export { loadMoreRequest };