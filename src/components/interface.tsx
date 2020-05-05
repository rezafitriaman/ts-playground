//Our First Interface #
//import * as ts from "typescript/lib/tsserverlibrary";
//import Types = ts.server.Msg.Types;

interface LabeledValue {
    label:string
}

/*
export function printLabel (labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
*/

//Optional Properties #
interface SquareConfig {
    color?: string;
    width?: number;
}

/*export function createSquare  (config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}*/

//Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

/*let pl: Point = {
    x: 10, y: 20
};

pl.x = 5; 

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5);
ro.length = 100;
a = ro;*/

//Excess Property Checks #
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

/*function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}*/

//let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
//let mySquare = createSquare({ colour: "red", width: 100 });

//Function Types #
interface SearchFunc {
    (source: string, subString: string): boolean;
}

/*
let mySearch: SearchFunc;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1
};
*/

// Indexable Types #
/*interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

export let myStr: string = myArray[0];

class Animal {
    name : string;
}
class Dog extends Animal {
    breed: string
}

interface NotOkay {
    [x: number] : Animal;
    [x: string] : Dog;
}*/

interface NumberDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

let numbers: NumberDictionary = {
    length: 50,
    name: 'fitriaman'
};

interface ReadonlyStringArray {
    readonly  [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // Error!

// Class Types #
/*interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

export class Clock implements ClockInterface {
    currentTime : Date = new Date();
    setTime(d: Date): void {
        console.log('a', this.currentTime);
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}

}*/

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

export function createClock(ctor: ClockConstructor, hour: number, minute:number): ClockInterface {
    return new ctor(hour, minute);
}

/*export class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}

export class AnalogClock implements ClockInterface {
    constructor(h:number, m: number) {}
    tick(): void {
        console.log('tick tock');
    }
}*/

export const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
};

// Extending Interfaces #
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.5;

// Hybrid Types #

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = ( function (start:number) {}) as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.10;


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image extends Control implements SelectableControl {

    select() { }
}

class Location {

}
