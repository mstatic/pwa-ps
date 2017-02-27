import { loadMoreRequest, loadCarById } from './carService.js';

window.pageEvents = {
    loadCarPage: (carId) => {
        loadCarById(carId)
    },
    loadMore: () => {
        loadMoreRequest();
    }
};

loadMoreRequest();