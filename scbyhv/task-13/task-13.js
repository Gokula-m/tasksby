//1.object creation of animal
var animal = {
    name: "Dog",
    color: "Brown",
    gender: "Boy",
    species: "Canis",
    type: "Mammal"
};

console.log(animal);
var newObj = Object.create(animal);
console.log(newObj.color);
console.log(newObj.name);

// 1.object creation of car
var car = {
    color: "Red",
    price: 809079,
    model: "Hhk-898",
    yearOfManufacture: 2022,
    brand: "Volkswagon",
    vehicleNum: "HRY-9689",
    typeOfCar: "sedan",
    seating: 4,
    mileage: "79",
};

console.log(car);
var newObj = Object.create(car);
console.log(newObj.color);
console.log(newObj.brand);

//2.find the duplicates in the string
var color = ["pink", "purple", "red", "orange", "pink", "red"];
function findDuplicates(color) {
    return color.filter((item, index) => color.indexOf(item) === index);
}
console.log(findDuplicates(color));


checkDuplicate()
function checkDuplicate() {
    let arr = ["abc", "xy", "bb", "abc"];
    let result = false;
    // call some function with callback function as argument
    result = arr.some((element, index) => { return arr.indexOf(element) !== index });
    if (result) {
        console.log('Array contains duplicate elements');
    } else {
        console.log('Array does not contain duplicate elements');
    }
}

//3. reverse a string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

// 4.find the highest and lowest value in array
var num = [90, 100, 20, 3, 49, 58];
var Maxvalue = Math.max.apply(Math, num);
console.log(Maxvalue);

var Minvalue = Math.min.apply(Math, num);
console.log(Minvalue);

//5.sorting of an array
fruits.sort();
console.log(fruits);

var num = [90, 100, 20, 3, 49, 58];
num.sort(function (a, b) { return a - b });
console.log(num);

//6.display first 3 elements in an array in UI
var num = [90, 100, 20, 3, 49, 58];
var arr = num.slice(0, 3);
console.log(arr);
document.getElementById("num").innerHTML = (num.slice(0, 3));

var fruit = ["Banana", "Orange", "Apple", "Mango"];
var arr = fruit.slice(0, 3);
console.log(arr);

//7.remove 4th (index) element and add 2 element there
var color = ["pink", "purple", "red", "orange", "yellow", "grey"];
color.splice(4, 1, "black");
color.splice(4, 0, "white");
console.log(color);