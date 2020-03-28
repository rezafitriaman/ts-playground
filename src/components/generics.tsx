// Hello World of Generics #

// it must return number

export function identity(arg:number): number {
    console.log(arg);
    return arg
}

export function identity1(arg:any): any {
    console.log(arg);
}

export function identity2<T>(arg: T): T {
    console.log(arg);
    return arg;
}

// Working with Generic Type Variables #
export function loggingIdentity<T>(arg: T): T {
    if(typeof arg === 'string') {
        console.log(arg.length)
    }
    console.log(arg);
    return arg;
}

export function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

// Generic Types #

export interface GenericIdentityFn<T> {
    (arg: T): T
}

export function identityA<T>(arg: T): T {
    return arg;
}

// Generic Classes #
export class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

/*let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 45));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "qq";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));*/

//Generic Constraints #
interface Lengthwise {
    length: number
}

export function loggingIdentity6<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
    return obj[key];
}

loggingIdentity6('car');

let x = {a: 1, b: 2, c: 3, d: 4};
getProperty(x, 'a');

