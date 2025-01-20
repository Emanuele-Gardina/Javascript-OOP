const pets = [];
class Pet {
  constructor(name, owner, species, breed) {
    this.petName = name;
    this.ownerName = owner;
    this.species = species;
    this.breed = breed;
  }
}
const formShop = document.getElementById("formShop");
formShop.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const ownerInput = document.getElementById("ownerName");
  const speciesInput = document.getElementById("species");
  const breedInput = document.getElementById("breed");
  const newPet = new Pet(nameInput.value, ownerInput.value, speciesInput.value, breedInput.value);
  pets.push(newPet);
  console.log(newPet);
  console.log(pets);
});
