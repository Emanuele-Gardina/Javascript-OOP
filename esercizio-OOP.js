class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}. `;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}. `;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la setssa età. `;
    }
  }
}

const userX = new User("Emanuele", "Gardina", 35, "Milano");
const userY = new User("Claudia", "Avaldi", 32, "Milano");
console.log(userX.compareAge(userY));
