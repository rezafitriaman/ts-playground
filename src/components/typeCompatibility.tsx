// Introduction #


interface Named {
    name : string;
}

class Person {
    name: string;
}

let p: Named;

p = new Person();

// A Note on Soundness #

interface Named1 {
    name: string;
}

export let x: Named1
export let y = { name: 'Alice', location: 'Seattle'};

x = y; 

export function greet(n:Named1) {
    console.log('Hello, ' + n.name);
}

//Comparing two functions #

export let r = (a: number) => 0;
export let z = (b: number, s: number) => 0;

let items = [1,2,3];

//items.forEach((item, index, array) => console.log(item));

//items.forEach(item => console.log(item));

//Function Parameter Bivariance #

export enum EventType {Mouse, Keyboard}

export interface Event {timestamp: number}
export interface MouseEvent extends Event {x: number; y: number}
export interface KeyEvent extends Event { keyCode: number}

export function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    console.log('eventType', eventType);
    console.log('handler', handler);
}

// Unsound, but useful and common
//listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
//listenEvent(EventType.Mouse, (e: Event) => console.log((e as MouseEvent).x + "," + (e as MouseEvent).y));
//listenEvent(EventType.Mouse, ((e: MouseEvent) => console.log(e.x + "," + e.y)) as (e: Event) => void);

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
//listenEvent(EventType.Mouse, (e: number) => console.log(e));   

export function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

//Enums #

enum Status {Ready, Waiting};
enum Color {Red, Blue, Green}

let status = Status.Ready;
//status = Color.Green

// Classes #

class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

//a = s;  // OK
//s = a;  // OK

// Generics #
interface Empty<T> {
    data: T;
}

let o: Empty<number>;
let l: Empty<string>;

// o = l;

export function identity <T>(x: T): T {
    console.log(x)
    return x;
}

export let reverse = function<U>(y: U): U {
    console.log(y);
    return y;
}


