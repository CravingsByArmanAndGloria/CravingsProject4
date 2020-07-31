// collections list to call from api:
// happy herbivore
// barbeque and grill
// serving pho
// burgers
// sushi
// mamma mia
// mexican magic
// sweet tooth



// GLOBAL VARIABLES:

const cravingApp = {};
cravingApp.url = 'https://developers.zomato.com/api/v2.1/';
cravingApp.key = '2a58266cf3907482bb14d2216d0c8208';


// CALLING API
cravingApp.zomatoCollections = () => {
    return $.ajax({
        url: `${cravingApp.url}/collections`,
        method: 'GET',
        dataType: 'json',
        headers: { "user-key": cravingApp.key },
        data: {
            city_id: 89,
        }
    })
        .then((res) => {
            // console.log('res.collections', res.collections);
            cravingApp.filterCollections(res);
        })
        .fail((error) => {
            console.log('error', error)
        })
}

cravingApp.filterCollections = (res) => {
    const bestCollections = cravingApp.filterResults = [
        res.collections[2],
        res.collections[5],
        res.collections[7],
        res.collections[8],
        res.collections[17],
        res.collections[20]
    ];
    // console.log(bestCollections);

    //Display img onto DOM
    $('.imageOne').html(`
        <img src="${bestCollections[0].collection.image_url}" alt="${bestCollections[0].collection.description}">
    `)
    $('.imageTwo').html(`
        <img src="${bestCollections[1].collection.image_url}" alt="${bestCollections[1].collection.description}">
    `)
    $('.imageThree').html(`
        <img src="${bestCollections[2].collection.image_url}" alt="${bestCollections[2].collection.description}">
    `)
    $('.imageFour').html(`
        <img src="${bestCollections[3].collection.image_url}" alt="${bestCollections[3].collection.description}">
    `)
    clickPics();
};

// Making picture options responsive to clicking
const clickPics = cravingApp.clickPics = () => {
    $('.imageOne').on('click', () => {
        // console.log('clicked')
        cravingApp.zomatoBurgers();     
    })
    $('.imageTwo').on('click', () => {
        cravingApp.zomatoVeggies();     
    })
    $('.imageThree').on('click', () => {
        cravingApp.zomatoSushis();     
    })
    $('.imageFour').on('click', () => {
        cravingApp.zomatoSweets();     
    })
}

//Generate Zomato Burgers API
cravingApp.zomatoBurgers = () => {
    return $.ajax({
        url: `${cravingApp.url}/search`,
        method: 'GET',
        dataType: 'json',
        headers: { "user-key": cravingApp.key },
        data: {
            city_id: 89,
            count: 10,
            cuisines: 168,
        }
    })
        .then((result) => { 
            const i = Math.floor(Math.random() * result.restaurants.length);
            // console.log('res.search', result.restaurants[i].restaurant);
            $('.results').html(`
                <h2>${result.restaurants[i].restaurant.name}</h2>
                <img src="${result.restaurants[i].restaurant.featured_image}" alt="${result.restaurants[i].restaurant.name}\'s featured burgers">
                <p class="contactInfo">${result.restaurants[i].restaurant.phone_numbers}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.location.address}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.timings}</p>
            `)
        })
        .fail((error) => {
            console.log('error', error)
        })
}


//Generate Zomato Veggies API
cravingApp.zomatoVeggies = () => {
    return $.ajax({
        url: `${cravingApp.url}/search`,
        method: 'GET',
        dataType: 'json',
        headers: { "user-key": cravingApp.key },
        data: {
            city_id: 89,
            count: 10,
            cuisines: 308,
        }
    })
        .then((result) => { 
            const i = Math.floor(Math.random() * result.restaurants.length);
            // console.log('res.search', result.restaurants[i].restaurant);
            $('.results').html(`
                <h2>${result.restaurants[i].restaurant.name}</h2>
                <img src="${result.restaurants[i].restaurant.featured_image}" alt="${result.restaurants[i].restaurant.name}\'s featured veggies">
                <p class="contactInfo">${result.restaurants[i].restaurant.phone_numbers}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.location.address}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.timings}</p>
            `)
        })
        .fail((error) => {
            console.log('error', error)
        })
}

//Generate Zomato Sushis API
cravingApp.zomatoSushis = () => {
    return $.ajax({
        url: `${cravingApp.url}/search`,
        method: 'GET',
        dataType: 'json',
        headers: { "user-key": cravingApp.key },
        data: {
            city_id: 89,
            count: 10,
            cuisines: 177,
        }
    })
        .then((result) => { 
            const i = Math.floor(Math.random() * result.restaurants.length);
            // console.log('res.search', result.restaurants[i].restaurant);
            $('.results').html(`
                <h2>${result.restaurants[i].restaurant.name}</h2>
                <img src="${result.restaurants[i].restaurant.featured_image}" alt="${result.restaurants[i].restaurant.name}\'s featured sushi">
                <p class="contactInfo">${result.restaurants[i].restaurant.phone_numbers}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.location.address}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.timings}</p>
            `)
        })
        .fail((error) => {
            console.log('error', error)
        })
}

//Generate Zomato Sweets API
cravingApp.zomatoSweets = () => {
    return $.ajax({
        url: `${cravingApp.url}/search`,
        method: 'GET',
        dataType: 'json',
        headers: { "user-key": cravingApp.key },
        data: {
            city_id: 89,
            count: 10,
            cuisines: 100,
        }
    })
        .then((result) => { 
            const i = Math.floor(Math.random() * result.restaurants.length);
            // console.log('res.search', result.restaurants[i].restaurant);
            $('.results').html(`
                <h2>${result.restaurants[i].restaurant.name}</h2>
                <img src="${result.restaurants[i].restaurant.featured_image}" alt="${result.restaurants[i].restaurant.name}\'s featured sweets">
                <p class="contactInfo">${result.restaurants[i].restaurant.phone_numbers}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.location.address}</p>
                <p class="contactInfo">${result.restaurants[i].restaurant.timings}</p>
            `)
        })
        .fail((error) => {
            console.log('error', error)
        })
}

//init
cravingApp.init = () => {
    cravingApp.zomatoCollections();
    // cravingApp.zomatoBurgers();
}

//Doc. ready
$(function () {
    cravingApp.init();
})