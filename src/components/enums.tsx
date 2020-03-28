//Enums #

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

export enum Response1 {
    No = 0,
    Yes = 1,
}

export function respond(recipient: string, message: Response1): void {
    console.log(recipient, message)
}

//String enums #

export enum Direction1 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

export function joystick(championName: string, direction: Direction1): void {
    console.log(championName, direction);
}

/*respond('Princess Carolline', Response1.Yes);
joystick('reza', Direction1.Up);*/
// Heterogeneous enums #

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES'
}

enum E1 {X, Y, Z}

enum E2 {
    A = 10, B, C
}

enum FileAccess {
    None,
    Read = 1 << 2,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = '123'.length
}

/*console.log(FileAccess.Read);
console.log(FileAccess.Write);
console.log(FileAccess.ReadWrite);*/

// Union enums and enum member types #
export enum Shapekind {
    Circle,
    Square,
}

export interface Circle {
    kind: Shapekind.Circle;
    radius: number;
}

export interface Square {
    kind: Shapekind.Square;
    sideLength: number;
}

export enum E {
    Foo,
    Bar
}

export function f(x: E) {

    if (x !== E.Foo ) {
        //console.log('body')
    }
}

let c: Circle = {
    kind: Shapekind.Circle,
    radius: 100,
};

let s: Square = {
    kind: Shapekind.Square,
    sideLength: 20
};

f(E.Bar);

export enum R {
    X, Y, Z
}
//console.log(R)
export function f1(obj: {Z: number}) {
    console.log(obj.Z);
    return obj.Z;
}
//f1(R);

//Enums at compile time #
export enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

type LogLevelStrings = keyof typeof LogLevel;

export function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    console.log(num)
    console.log(LogLevel.WARN)
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
