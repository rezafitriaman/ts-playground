// Partial<T>

export interface Todo {
    title: string;
    description: string;
}

export function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    console.log({fieldsToUpdate})
    console.log({ ...todo, ...fieldsToUpdate })

    return { ...todo, ...fieldsToUpdate };
}

// Readonly<T>

const todo: Readonly<Todo> = {
    title: 'delete inactive users',
    description: 'so that inactive user be deleted'
}

//todo.title = 'hey'
//function freeze<T>(obj: T): Readonly<T>;

//Record<K,T>

export interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: {title: 'about'},
    contact: {title: 'contact'},
    home: {title: 'home'}
}

// Pick<T,K>

export interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const todo2: TodoPreview = {
    title: 'clean room',
    completed: false
}

// Omit<T,K>
type TodoPreview2 = Omit<Todo2, 'description'>;

const todo3: TodoPreview2 = {
    title: 'clean room',
    completed: false
}

// Exclude<T,U>

type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
type T2 = Exclude<string | number | (() => void), Function>;

// Extract<T,U>
type T3 = Extract<'a' | 'b' | 'c', 'a' | 'c'>; //a
type T4 = Extract<string | number | (() => boolean), Function>;

//NonNullable<T>
type T5 = NonNullable<string | number | undefined>;
type T6 = NonNullable<string[] | null | undefined>;

//Parameters<T>
declare function f1(arg: {a:number; b: string}): void;
type T7 = Parameters<() => string>;
type T8 = Parameters<(s: string) => void>;
type T9 = Parameters<<T>(arg:T) => T>;
type T10 = Parameters<typeof f1>;

//ConstructorParameters<T>
type T11 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type T12 = ConstructorParameters<FunctionConstructor>; // string[]
type T13 = ConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]

//ReturnType<T>
declare function f1(): { a: number; b: string };
type T14 = ReturnType<() => string>; // string
type T15 = ReturnType<(s: string) => void>; // void
type T16 = ReturnType<<T>() => T>; // {}
type T17 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T18 = ReturnType<typeof f1>; // { a: number, b: string }

//InstanceType<T>
class C {
    x = 0;
    y = 0;
}

type T19 = InstanceType<typeof C>; 
type T20 = InstanceType<any>;

// Required<T>
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = {a: 5};
const obj1 : Required<Props> = {a: 5, b: 'master'}

//ThisParameterType
function toHex(this: number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}

//OmitThisParameter
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex);

//ThisType<T>

// compile with --noImplicitThis

export type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

export function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    console.log(desc);
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    console.log({...data, ...methods });
    
    return { ...data, ...methods } as D & M;
}

/* export let aa = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
        this.x += dx; // Strongly typed this
        this.y += dy; // Strongly typed this
        }
    }
}); */
/* 
aa.x = 10;
aa.y = 20;
aa.moveBy(5, 5); */