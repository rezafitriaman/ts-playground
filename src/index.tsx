import {invokeLater} from "./components/typeCompatibility";

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x:number, y:number) => console.log(x + ", " + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?:number, y?:number) => console.log(x + ", " + y));
