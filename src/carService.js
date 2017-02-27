import { appendCars } from './template.js';
import { addCarsToStorage, getCars, getLastCarId } from './clientStorage.js';

var apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
var apiUrlLatest = apiUrlPath + 'latest-deals.php';
var apiUrlCar = apiUrlPath + 'car.php?carId=';

function loadMoreRequest() {
    fetchPromise().then((status) => {
        document.getElementById('connection-status').innerHTML = status;
        loadMore();
    });
}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        fetch(apiUrlLatest + '?carId=' + getLastCarId())
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                addCarsToStorage(data.cars)
                    .then(() => {
                        resolve('The connection is ok, showing latest results');
                    });
            })
            .catch((e) => {
                resolve('No connecting showing offline results');
            });

            setTimeout(() => {
                resolve('The connecting is hanging showing offline results');
            }, 3000);
    });
}

function loadMore() {
    getCars().then((cars) => {
        appendCars(cars);
    });
}

function loadCarById(carId) {
    fetch(apiUrlCar + carId)
        .then((response) => response.text())
        .then((data) => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(() => {
            alert('can not find car');
        });
}

export { loadMoreRequest, loadCarById };