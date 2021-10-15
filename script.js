var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat() {
    animalImg.src = "cat.png";
}

function pickDog() {
    animalImg.src = "dog.jpeg";
}