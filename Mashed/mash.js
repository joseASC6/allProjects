function mash(){
    return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids! You drive a " + getCar();
}
console.log(mash());

function getHome(){
    var house = ["Mansion", "Apartment", "Shack", "House", process.argv[2], "Hell"]
    let number = Math.random() * (house.length - 0) + 0;
    number = Math.floor(number);
    //console.log(house[number]);
    return house[number]
}
//console.log(getHome());
function getChildrenCount(){
    var child = Math.random() * (100 - 0) + 0;
    child = Math.floor(child);
    let kids = [child, process.argv[3]]
    let number = Math.random() * (kids.length - 0) + 0;
    number = Math.floor(number);
    return kids[number]
}



function getCar(){
    var car = ["Lambo", 'Tesla', 'Box With Wheels', 'DeLeroen', process.argv[4]]
    let number = Math.random() * (car.length - 0) + 0;
    number = Math.floor(number);
    return car[number];
}