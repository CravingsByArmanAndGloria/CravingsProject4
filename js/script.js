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
cravingApp.url = 'https://developers.zomato.com/api/v2.1/collections';
cravingApp.key = '2a58266cf3907482bb14d2216d0c8208';


// CALLING API
cravingApp.zomatoAPI = () => {
    return $.ajax({
        url: `${cravingApp.url}`,
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
    console.log(bestCollections[0]);

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
};





//init
cravingApp.init = () => {
    cravingApp.zomatoAPI();
}

//Doc. ready
$(function () {
    cravingApp.init();
})