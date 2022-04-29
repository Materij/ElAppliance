class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    // a method that identifies the appliance as being plugged into an outlet
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }
    // method that detects the appliance as unplugged
    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}
// Device 1
class Lamp extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}
// Device 2
class Computer extends ElectricalAppliance {
    constructor (name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}
// Прибор 3
class RobotVacuumCleaner extends ElectricalAppliance {
    constructor (name, brand, power, functionality, cleaningType, smartHome) {
        super(name, power);
        this.brand = brand;
        this.functionality = functionality;
        this.cleaningType = cleaningType;
        this.smartHome = smartHome;
        this.isPlugged = false;
    }
}
// lamp instance
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
// computer instance
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");
// robot vacuum cleaner instance
const vacuum = new RobotVacuumCleaner ("Mop 2", "Xiaomi", 220, "multi", "dry and wet cleaning", "used app");
// unplug the lamp
tableLamp.unplug();
// plug homePC
homePC.plugIn();
// unplug the robot vacuum cleaner
vacuum.plugIn();
// result
console.log(homePC);
console.log(tableLamp);
console.log(vacuum);
