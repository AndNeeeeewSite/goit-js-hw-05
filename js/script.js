//          1.

class Account{
    constructor({login,email}){
        this.login = login
        this.email = email

    }
    getInfo(){
      console.log("Login: "+this.login + " Email: " + this.email)
    }
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
//              2.

class User{
   constructor({name,age,followers}){
       this.name = name
       this.age = age
       this.followers = followers
   }
   getInfo(){
     console.log('User '+ this.name+' is '+ this.age + ' years old and has ' + this.followers + ' followers')
   }
}

const mango2 = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly2.getInfo(); // User Poly is 3 years old and has 17 followers
//              3. 

class Storage{
  constructor(array){
    this.items = array
  }
  getItems(){
    return this.items
  }
  addItem(name){
    this.items.push(name)
  }
  removeItem(name){
    if (this.items.indexOf(name) > -1){
      this.items.splice(this.items.indexOf(name),1)
    }
    else{
      
    }
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//                 3.

class StringBuilder{
  constructor(value){
    this.value = value
  }
  append(text){
    this.value = this.value + text
  }
  prepend(text){
    this.value = text + this.value
  }
  pad(text){
    this.value = text + this.value + text
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
//          5.
class Car {
  static getSpecs(car){
    console.log(car.maxSpeed +" "+ car.speed +" "+ car.isOn +" "+ car.distance +" "+ car.price)
  }
  constructor({speed,price,maxSpeed,isOn,distance}) {
    this.speed = speed
    this.price = price
    this.maxSpeed = maxSpeed
    this.isOn = isOn
    this.distance = distance
    if(this.speed == undefined){
      this.speed = 0
    }
    if(this.distance == undefined){
      this.distance = 0
    }
  }
  turnOn() {
    this.isOn = true
  }

  turnOff() {
    this.isOn = false
    this.speed = 0
  }

  accelerate(value) {
    if(this.speed + value > this.maxSpeed){
      this.speed = this.maxSpeed
    }
    else{
      this.speed = this.speed + value
    }
  }
  decelerate(value) {
    if(this.speed - value < 0){
      this.speed = 0
    }
    else{
      this.speed = this.speed - value
    }
  }
  drive(hours) {

    this.distance = this.distance + hours * this.speed
    console.log(this.speed)
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000