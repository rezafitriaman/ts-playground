// Intersection Types #
function extend<First extends object, Second extends object>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }

    return result as First & Second;
}

// -------

class Person {
    constructor(public name: string) {}
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger  implements Loggable {
    log(name: string) {
        console.log(`Hello, Im ${name}`);
    }
}

const pedro = extend(new Person('Pedro'), ConsoleLogger.prototype);

//pedro.log(pedro.name); 
//console.log('q2')

//Union Types #

export function padLeft(value: string, padding: string|number) {
    if(typeof padding === "number") {
        console.log(Array(padding + 1).join(" ") + value)
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        console.log(padding + value)
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

//padLeft("Hello world", 1 );
//console.log(Array(4 + 1).join(".") + 'reza')

/* export interface Bird {
    fly() : void;
    layEggs() : void;
}

export interface Fish {
    swim(): void;
    layEggs() : void;
}

export function getSmallPet(pet: Fish | Bird): Fish | Bird {
    return pet;
}

export let calibri: Bird = {
    fly: () => console.log('flying'),
    layEggs: () => console.log('layEggs')
}

export let piranha: Fish = {
    swim: () => console.log('swimming'),
    layEggs: () => console.log('layEggs')
} */
//let pet = getSmallPet(piranha);
//console.log(pet   )
//pet.layEggs();
//pet.swim();
//pet.layEggs(); // okay
//pet.fly();    // errors

//Type Guards and Differentiating Types #

// Each of these property accesses will cause an error
/* let pet = getSmallPet(calibri);
if ((pet as Fish).swim) {
    (pet as Fish).swim();
} else if ((pet as Bird).fly) {
    (pet as Bird).fly();
} */

// User-Defined Type Guards #

export interface Fish {
    swim(): void;
    layEggs(): void;
}

export interface Bird {
    fly(): void;
    layEggs(): void;
}

export function buySmallPet(pet: Bird | Fish): Bird | Fish {
    return pet;
}

export let calibri: Bird = {
    fly: function() {
        //console.log('flying');
    },
    layEggs: function() {
        //console.log('layEggs');
    }
};

export let piranha: Fish = {
    swim: function() {
        //console.log('swimming')
    },
    layEggs: function() {
        //console.log('layEggs');
    }
}

function isFish(pet: Fish | Bird): pet is Fish  {
    return (pet as Fish).swim !== undefined;
}

let pet = buySmallPet(calibri);
pet.layEggs();

if (isFish(pet)) {
    pet.swim();
}else {
    pet.fly();
}
/* let bird = buySmallPet(calibri);
bird.layEggs(); */

// Using the in operator #

/* function move(pet: Bird | Fish) {
    if ("swim" in pet) {
        return pet.swim()
    }
    return pet.fly()
}

move(piranha); */

// typeof type guards #

function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

function paddingLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if(isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}`);
}

// instanceof type guards #

interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpace: number) {}
    getPaddingString() {
        return Array(this.numSpace + 1).join('3'); 
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
        return this.value;
    } 
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4) : 
    new StringPadder("master"); 
}

// type is 'SpaceReapetingPadder | STringPadder'
let padder: Padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder.getPaddingString(); // type narrowed to 'SpaceRepeatingPadder'
}

if (padder instanceof StringPadder) {
    padder.getPaddingString(); // type narrowed to 'Stringpadder'
}

//Nullable types #
function f(x: number, y?: number) {
    return x + (y || 0);
}

f(1);
//f(1)
//f(1, undefined)
//f(1, null)

class C {
    a: number;
    b?: number;
}

let c = new C();
/* c.a = 12;
c.a = undefined;
c.b = 13;
c.b = undefined;
c.b = null; */

//Type guards and type assertions #

function n(sn: string| null) {
    if(sn == null) {
        return 'default';
    }else {
        return sn;
    }
}

//console.log(n(null));

function r(z: string | null): string {
    return z || 'default'
}

//console.log(r('a'))

function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '. the' + epithet;
    }
    name = name || "Bob";
    return postfix('great');
}

function fixed(name: string | null): string {
    //name = name || "Bob";
    console.log('name: ', name);
    function postfix(epithet: string) {
        console.log('epithet: ', epithet)
        return name!.charAt(0) + '. the ' + epithet;
    }
    console.log('name2:', name)
    name = name || "Bob";
    console.log('name3:', name)
    return postfix('great');
}

//console.log(fixed('reza'))

//Type Aliases #
type Name = string;
type NameResolver = () => string;
type nameOrResolver = Name | NameResolver;
function getName(n: nameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }else {
        return n();
    }
}

/* console.log(getName(()=> {
    return 'reza'
})); */

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

type LinkedList<T> = T & {next: LinkedList<T>};

interface Person {
    name: string;
}

var people: LinkedList<Person>;

//Interfaces vs. Type Aliases #

type Alias = { num: number }
interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

//String Literal Types #

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class UIElement {
    animate(dx: number, dy: number, easing:Easing) {
        if(easing === 'ease-in') {
            console.log('code ease-in');
        }else if(easing === 'ease-out') {
            console.log('code ease-out');
        } else if (easing === "ease-in-out") {
            console.log('code ease-in-out');
        }else {
            throw new Error('should not pass null or undefined.');
            // error! should not pass null or undefined.
        }
    }
}

//let button = new UIElement();
//button.animate(0, 0, "ease-in");
//button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
//type HTMLTag = 'img' | 'div' | 'input';
function createElement(tagName: 'img'): HTMLImageElement;
function createElement(tagName: 'input'): HTMLInputElement;
function createElement(tagName: 'div'): HTMLDivElement ;
function createElement(tagName: string): any {
    //return document.createElement(tagName);
}

createElement('div'); 

//Numeric Literal Types #
type maxRandomNumber = 1 | 2 | 3 | 4 | 5 | 6
function rollDice(max: maxRandomNumber | undefined = undefined): maxRandomNumber {
    if (max == null) {
        max =  6;
    }
    
    //max = max || 6;
    let random = 1 + Math.floor(Math.random() * max) as maxRandomNumber ;
    return random;
}

//console.log(rollDice()); 

// Enum Member Types #

//Discriminated Unions #
//Exhaustiveness checking #

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Triangle {
    kind: 'triangle',
    bottom: number,
    height: number
}

type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x: never): never {
    console.log("Unexpected object: ", x);
}

function area(s: Shape) {
    switch (s.kind) {
        case 'square': return s.size * s.size;
        case 'rectangle': return s.height * s.width;
        case 'circle': return Math.PI * s.radius * 2;
        case 'triangle': return 0.50 * s.bottom * s.height;
        default: return assertNever(s); 
        //case 'triangle': return 0.50 * s.bottom * s.height;
    }
}

let square: Square = {
    kind: 'square', 
    size: 5
}

let rectangle: Rectangle = {
    kind: 'rectangle',
    width: 5,
    height: 6
}

let circle: Circle = {
    kind: 'circle',
    radius: 8
}

let triangle: Triangle = {
    kind: 'triangle',
    bottom: 6,
    height: 8
}

// console.log(area(triangle));

// Polymorphic this types #

class BasicCalculator {
    public constructor(protected value: number) {}
    
    public curentValue(): number {
        console.log('curentValue: ', this.value);
        return this.value;
    }
    public add(operand:number): this {
        this.value = operand + this.value;
        console.log('add: ', this);
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        console.log('multiply: ', this);
        return this;
    }
}

let v = new BasicCalculator(2)   
.add(1)        
.multiply(5)
.curentValue();

class ScientificCalculator  extends  BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }

    public sin() {
        this.value = Math.sin(this.value);
        console.log( 'sin: ',this)
        return this; 
    }
}

let t = new ScientificCalculator(2)
    .multiply(2)
    .add(1)
    .sin()
    .curentValue()
