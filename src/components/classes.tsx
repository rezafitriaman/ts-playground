// Classes #
/*interface Greet {
    message: string;
    greet(): string;
}

export class Greeter implements Greet{
    constructor(public message: string) {
        this.message = message;
    }
    greet() {
        return "Hello " + this.message;
    }
}*/

// Inheritance #
/*interface Animals {
    theName: string;
    move(distanceInMeters: number):void;
}

interface Dogs extends Animals{
    theName: string;
    bark():void;
}

export class Animal implements Animals{
    constructor( public theName: string){
        this.theName = theName;
    }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.theName} moved ${distanceInMeters}m.`);
    }
}

export class Dog extends Animal implements Dogs{
    public bark() {
        console.log('woof! woof!');
    }
}

export class Snake extends Animal {
    constructor(theName: string) {super(theName)}
    public move(distanceInMeters: number = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

export class Horse extends Animal{
    constructor(theName: string) {super(theName)}
    public move(distanceInMeters: number = 45) {
        console.log("galloping...");
        super.move(distanceInMeters);
    }
}*/

// Public, private, and protected modifiers #
// Public by default #

/*
export class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName};
}

export class Rhino extends Animal {
    constructor() {super("rhino")}
}

export class Employee  {
    private name: string;
    constructor(theName: string) { this.name = theName}
}
*/

// Understanding protected #
/*export class Person {
    protected name: string;
    protected constructor(name: string) {this.name = name}
}

export class Employee extends Person{
    private department: string;
    constructor(name: string, department:string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
}*/

// Readonly modifier #
/*export class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("man with the 8 strong legs");
dad.name = 'Man with the 3-piece suit';*/

// Parameter properties #
/*export class Octopus {
    readonly numberOfLegs: number = 8;
    constructor (readonly theName: string) {
        this.theName = theName;
    }
}*/

// Accessors #
/*class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = 'bob smith';
if (employee.fullName) {
    console.log(employee.fullName)
}*/

/*
const fullNameMaxLength = 10;

export class Employee {
    private _fullName: string;
    constructor(_fullName:string) {this._fullName = _fullName}
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}
*/

// Static Properties #

/*export  class Grid {
    static origin = {x: 0, y:0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist * yDist * yDist ) / this.scale;
    }
    constructor (public scale: number) {}
}*/

// Abstract Classes #
/*
abstract class Department  {

    protected constructor(public  name: string) {}
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived class
}

export class AccountingDepartment extends Department {
    constructor() {
        super('accounting and auditing');
    }

    printMeeting(): void {
        console.log('the accounting department meets each Monday at 10am');
    }

    generateReports(): void {
        console.log('generating accounting reports..')
    }
}

*/

// Advanced Techniques #

/*
export class Greeter {
    static standardGreeting = 'Hello, there';
    greeting: string | undefined;
    constructor(message?: string) {
        this.greeting = message;
    }
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting
        }
    }
}


*/

// Using a class as an interface #

/*export class Point {
    x: number;
    y: number;
}

export interface Point3d extends Point {
    z: number;
}*/

