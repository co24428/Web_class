// sort & filter
function sortByPrice(){
    // 1. delete all flat divs
    $('.flat').remove();

    // 2. sort flats in all flats
    if (isAscforPrice) { // if true, set descending order and turn out to false
        showedFlats.sort((a, b) => b.rentalPricePerMonth-a.rentalPricePerMonth);
        isAscforPrice = false;

    } else { // if false, set ascending order and turn out to true
        showedFlats.sort((a, b) => a.rentalPricePerMonth-b.rentalPricePerMonth);
        isAscforPrice = true;
    }
    
    // 3. set up flat divs
    // sortedFlats.forEach(item => {
    showedFlats.forEach(item => {
        makeFlatDiv(item); 
    });
}
function sortByAreaSize(){
    // 1. delete all flat divs
    $('.flat').remove();

    // 2. sort flats in all flats
    if (isAscforAreaSize) { // if true, set descending order and turn out to false
        showedFlats.sort((a, b) => b.squareMetreSize-a.squareMetreSize);
        isAscforAreaSize = false;
    } else { // if false, set ascending order and turn out to true
        showedFlats.sort((a, b) => a.squareMetreSize-b.squareMetreSize);
        isAscforAreaSize = true;
    }
    
    // 3. set up flat divs
    // sortedFlats.forEach(item => {
    showedFlats.forEach(item => {
        makeFlatDiv(item); 
    });
}


function filterByCity(){
    let filteredFlats = [];
    // 0. set up cities list from allFlats
    // cities, not used now

    // 1. delete all flat divs
    $('.flat').remove();

    // 2. get target city and specific flat
    const target = $('#filterByCity').val();
    if (target != ''){
        allFlats.forEach(flat => {
            if (flat.city.toLowerCase().includes(target.toLowerCase())){
                filteredFlats.push(flat);
            }
        });
    } else if (target == ''){
        filteredFlats = allFlats;
    }
    showedFlats = filteredFlats;
    
    // 3. set up flat divs
    filteredFlats.forEach(item => {
        makeFlatDiv(item); 
    });
}
// function FilterByPrice(min, max, onoff){
// function FilterByPrice(min, max){
function FilterByPrice(){
    let filteredFlats = [];
    const min = $('#minPrice').val();
    const max = $('#maxPrice').val();
    const checkMin = (min == '');
    const checkMax = (max == '');

    if (checkMax && checkMin){
        filteredFlats = allFlats;
    } else if (checkMax){ // only Min is inserted
        allFlats.forEach(flat => {
            if (flat.rentalPricePerMonth >= Number.parseInt(min)){
                filteredFlats.push(flat);
            }
        });
    } else if (checkMin){ // only Max is inserted
        allFlats.forEach(flat => {
            if (flat.rentalPricePerMonth <= Number.parseInt(max)){
                filteredFlats.push(flat);
            }
        });
    } else { // both are inserted
        allFlats.forEach(flat => {
            if ((flat.rentalPricePerMonth >= Number.parseInt(min)) && (flat.rentalPricePerMonth <= Number.parseInt(max))){
                filteredFlats.push(flat);
            }
        });
    }
    showedFlats = filteredFlats;
    
    $('.flat').remove();
    filteredFlats.forEach(item => {
        makeFlatDiv(item); 
    });
}
function FilterByAreaSize(){
    let filteredFlats = [];
    const min = $('#minAreaSize').val();
    const max = $('#maxAreaSize').val();
    const checkMin = (min == '');
    const checkMax = (max == '');

    if (checkMax && checkMin){
        filteredFlats = allFlats;
    } else if (checkMax){ // only Min is inserted
        allFlats.forEach(flat => {
            if (flat.squareMetreSize >= Number.parseInt(min)){
                filteredFlats.push(flat);
            }
        });
    } else if (checkMin){ // only Max is inserted
        allFlats.forEach(flat => {
            if (flat.squareMetreSize <= Number.parseInt(max)){
                filteredFlats.push(flat);
            }
        });
    } else { // both are inserted
        allFlats.forEach(flat => {
            if ((flat.squareMetreSize >= Number.parseInt(min)) && (flat.squareMetreSize <= Number.parseInt(max))){
                filteredFlats.push(flat);
            }
        });
    }
    showedFlats = filteredFlats;
    
    $('.flat').remove();
    filteredFlats.forEach(item => {
        makeFlatDiv(item); 
    });
}

