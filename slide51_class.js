class Car {
    constructor(){
        this.speed = 0;
    }
    printSpeed(){
        console.log(this.speed + "\n");
    }
}

var car = new Car();
car.instanceMethod = function(){
    console.log('An instance method \n');
};

car.speed = 50;
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car {
    constructor(){
        super();
        this.topState = 'closed';
    }
    openTop(){
        this.topState = 'opened';
        console.log('Top: ' + this.topState + '\n');
    }
    closeTop(){
        this.topState = 'closed';
        console.log('Top: ' + this.topState + '\n');
    }
}

var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet {
    constructor(){
        super();
        this.name = 'Tesla http://www.teslamotors.com/roadster';
    }
    sayName(){
        console.log(this.name + '\n');
    }
}

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();