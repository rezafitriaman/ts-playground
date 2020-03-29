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

export interface Bird {
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
    fly: () => console.log('swimming'),
    layEggs: () => console.log('layEggs')
}

export let piranha: Fish = {
    swim: () => console.log('swimming'),
    layEggs: () => console.log('layEggs')
}

let pet = getSmallPet(piranha);

pet.layEggs();
//pet.swim();
//pet.layEggs(); // okay
//pet.fly();    // errors

//Type Guards and Differentiating Types #


